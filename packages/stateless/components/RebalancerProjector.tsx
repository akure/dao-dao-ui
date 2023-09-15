import {
  CategoryScale,
  ChartDataset,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  ScatterDataPoint,
  Title,
  Tooltip,
} from 'chart.js'
import clsx from 'clsx'
import Controller from 'node-pid-controller'
import { useMemo } from 'react'
import { Line } from 'react-chartjs-2'

import { DISTRIBUTION_COLORS_EVERY_OTHER } from '@dao-dao/utils'

import { useNamedThemeColor } from '../theme'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// How to change the price of an asset on each rebalance.
export type RebalancerProjection =
  | {
      type: 'linear'
      slope: number
    }
  | {
      type: 'random'
      disturbance: number
    }

export type RebalancerProjectorAsset = {
  symbol: string
  currentAmount: number
  targetProportion: number
  // $ per 1 unit of asset
  currentPrice: number
  projection: RebalancerProjection
}

export type RebalancerProjectorProps = {
  pid: {
    kp: number
    ki: number
    kd: number
    // Seconds between each rebalance.
    interval: number
  }
  assets: RebalancerProjectorAsset[]
  // How many times to rebalance.
  numRebalances: number
  className?: string
}

const changePrice = (
  currentPrice: number,
  projection: RebalancerProjection
) => {
  switch (projection.type) {
    case 'linear':
      return currentPrice * projection.slope
    case 'random':
      // Randomly increase or decrease the price based on the disturbance.
      return currentPrice * (1 + (Math.random() - 0.5) * projection.disturbance)
  }
}

export const RebalancerProjector = ({
  pid: { kp, ki, kd, interval },
  assets,
  numRebalances,
  className,
}: RebalancerProjectorProps) => {
  const textColor = useNamedThemeColor('text-tertiary')
  const borderColor = useNamedThemeColor('border-primary')

  // The PID controller for each asset.
  const controllers = useMemo(
    () =>
      [...Array(assets.length)].map(
        () =>
          new Controller({
            k_p: kp,
            k_i: ki,
            k_d: kd,
            dt: interval,
          })
      ),
    [assets.length, interval, kd, ki, kp]
  )

  controllers.forEach((controller) => {
    controller.reset()
  })

  // Each projection is a list of all assets' amount and price after each
  // rebalance.
  const projections = [...Array(numRebalances)].reduce(
    (
      acc: {
        amount: number
        price: number
      }[][]
    ) => {
      const lastProjection = acc[acc.length - 1]

      // Update the price for each asset.
      const newProjection = assets.map(({ projection }, index) => {
        const { amount, price } = lastProjection[index]
        const newPrice = changePrice(price, projection)

        return {
          amount,
          price: newPrice,
        }
      })

      // Get total value of assets based on new prices.
      const totalValue = newProjection.reduce((acc, { amount, price }) => {
        return acc + amount * price
      }, 0)

      // Use PID controller with new values to rebalance amounts.
      assets.forEach(({ targetProportion }, index) => {
        const controller = controllers[index]
        const { amount: lastAmount, price } = newProjection[index]

        const targetValue = targetProportion * totalValue
        controller.setTarget(targetValue)

        const currentValue = lastAmount * price
        // Rebalance with PID.
        const rebalanceValue = controller.update(currentValue)
        const newAmount = lastAmount + rebalanceValue / price

        // Update projection amount.
        newProjection[index].amount = newAmount
      })

      return [...acc, newProjection]
    },
    [
      // Start with initial amount and price for each asset.
      assets.map(({ currentAmount, currentPrice }) => ({
        amount: currentAmount,
        price: currentPrice,
      })),
    ]
  )

  const getProjections = (
    { symbol }: RebalancerProjectorAsset,
    assetIndex: number
  ): ChartDataset<'line', (number | ScatterDataPoint | null)[]>[] => [
    {
      label: `${symbol} Value`,
      data: projections.map(
        (projection) =>
          projection[assetIndex].amount * projection[assetIndex].price
      ),
    },
    {
      label: `${symbol} Amount`,
      data: projections.map((projection) => projection[assetIndex].amount),
    },
  ]

  return (
    <div className={clsx('h-full', className)}>
      <Line
        data={{
          labels: [undefined, ...Array(numRebalances)].map((_, index) =>
            (index + 1).toLocaleString()
          ),
          datasets: [
            ...assets.flatMap(getProjections),
            // Total
            {
              label: 'Total Value',
              data: projections.map((projection) =>
                projection.reduce(
                  (acc, { amount, price }) => acc + amount * price,
                  0
                )
              ),
            },
          ].map((p, index) => ({
            ...p,
            borderColor:
              DISTRIBUTION_COLORS_EVERY_OTHER[
                index % DISTRIBUTION_COLORS_EVERY_OTHER.length
              ],
          })),
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          // Disable all events (hover, tooltip, etc.)
          events: [],
          animation: false,
          elements: {
            point: {
              radius: 0,
            },
          },
          plugins: {
            title: {
              display: false,
            },
            // legend: {
            //   position: 'bottom',
            // },
          },
          scales: {
            x: {
              display: true,
              ticks: {
                color: textColor,
              },
              grid: {
                color: borderColor,
                tickColor: 'transparent',
              },
            },
            y: {
              display: true,
              title: {
                text: 'Est. USD Value',
                display: true,
                color: textColor,
              },
              ticks: {
                color: textColor,
              },
              grid: {
                color: borderColor,
                tickColor: 'transparent',
              },
            },
          },
        }}
      />
    </div>
  )
}
