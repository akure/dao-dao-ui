import { useEffect, useMemo, useRef } from 'react'
import { waitForAll } from 'recoil'

import { configSelector } from '@dao-dao/state/recoil/selectors/contracts/DaoCore.v2'
import { useCachedLoadable } from '@dao-dao/stateless'
import { FeedDaoWithItems, FeedFilter, FeedState } from '@dao-dao/types'
import { getFallbackImage } from '@dao-dao/utils'

import { getSources } from '../core'

export type UseFeedOptions = {
  filter?: FeedFilter
}

export const useFeed = ({ filter = {} }: UseFeedOptions = {}): FeedState => {
  const sources = getSources().map(({ Renderer, useData }) => ({
    Renderer,
    // Safe to disable since `getSources` is constant. The hooks are always
    // called in the same order.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    data: useData(filter),
  }))

  // Refresh all input sources.
  const refresh = () => sources.map(({ data: { refresh } }) => refresh())

  // Update all sources once per minute. Memoize refresh function so that it
  // doesn't restart the interval when the ref changes.
  const refreshRef = useRef(refresh)
  refreshRef.current = refresh
  useEffect(() => {
    const interval = setInterval(() => refreshRef.current(), 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  // Sort and combine items from all sources.
  const { pendingItemCount, totalItemCount, sourceDaosWithItems } =
    useMemo(() => {
      // Flatten items so we can sort them with respect to each other. This also
      // serves to filter out any DAOs with no items.
      const itemsWithDao = sources
        .flatMap(({ Renderer, data: { daosWithItems } }) =>
          daosWithItems.flatMap(({ chainId, coreAddress, items }) =>
            items.map((item) => ({
              Renderer,
              chainId,
              coreAddress,
              item,
            }))
          )
        )
        .sort((a, b) => (a.item.order ?? Infinity) - (b.item.order ?? Infinity))

      // Order DAOs by the order that one of their items first appears in list
      // of all items.
      const orderedDaos = itemsWithDao.reduce(
        (acc, { chainId, coreAddress }) =>
          acc.some(
            (existing) =>
              existing.chainId === chainId &&
              existing.coreAddress === coreAddress
          )
            ? acc
            : [
                ...acc,
                {
                  chainId,
                  coreAddress,
                },
              ],
        [] as { chainId: string; coreAddress: string }[]
      )

      // For each DAO, select from the sorted items (preserving order) only the
      // items that belong to that DAO. This also serves to combine/group items
      // from the various sources by DAO.
      const sortedCombinedDaosWithItems = orderedDaos.map(
        ({ chainId, coreAddress }) => ({
          chainId,
          coreAddress,
          items: itemsWithDao
            .filter(
              (itemWithDao) =>
                itemWithDao.chainId === chainId &&
                itemWithDao.coreAddress === coreAddress
            )
            .map(({ Renderer, item }) => ({
              Renderer,
              ...item,
            })),
        })
      )

      return {
        pendingItemCount: itemsWithDao.filter(
          ({ item: { pending } }) => pending
        ).length,
        totalItemCount: itemsWithDao.length,
        sourceDaosWithItems: sortedCombinedDaosWithItems,
      }
    }, [sources])

  // Get DAO configs for all DAOs found.
  const daoConfigs = useCachedLoadable(
    waitForAll(
      sourceDaosWithItems.map(({ chainId, coreAddress }) =>
        configSelector({
          chainId,
          contractAddress: coreAddress,
          params: [],
        })
      )
    )
  )

  // Combine DAO configs with DAOs and items.
  const daosWithItems = useMemo(() => {
    if (daoConfigs.state !== 'hasValue') {
      return []
    }

    return sourceDaosWithItems
      .map(
        (
          { chainId, coreAddress, items },
          index
        ): FeedDaoWithItems | undefined =>
          daoConfigs.contents[index] && {
            dao: {
              chainId,
              coreAddress,
              name: daoConfigs.contents[index].name,
              imageUrl:
                daoConfigs.contents[index].image_url ||
                getFallbackImage(coreAddress),
            },
            items,
          }
      )
      .filter(
        (daoWithItems): daoWithItems is FeedDaoWithItems => !!daoWithItems
      )
  }, [daoConfigs.state, daoConfigs.contents, sourceDaosWithItems])

  return {
    loading: sources.some(({ data: { loading } }) => loading),
    refreshing: sources.some(({ data: { refreshing } }) => refreshing),
    daosWithItems,
    pendingItemCount,
    totalItemCount,
    refresh,
  }
}
