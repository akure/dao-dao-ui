import { Add, EscalatorWarning, Upgrade } from '@mui/icons-material'
import { ComponentType } from 'react'
import { useTranslation } from 'react-i18next'

import {
  ButtonLinkProps,
  DaoCardInfo,
  Feature,
  LoadingData,
} from '@dao-dao/types'

import { useDaoInfoContext, useDaoNavHelpers } from '../../../hooks'
import { GridCardContainer } from '../../GridCardContainer'
import { Loader } from '../../logo/Loader'
import { NoContent } from '../../NoContent'

export interface SubDaosTabProps {
  DaoCard: ComponentType<DaoCardInfo>
  subDaos: LoadingData<DaoCardInfo[]>
  isMember: boolean
  createSubDaoHref?: string
  upgradeToV2Href?: string
  ButtonLink: ComponentType<ButtonLinkProps>
}

export const SubDaosTab = ({
  DaoCard,
  subDaos,
  isMember,
  createSubDaoHref,
  upgradeToV2Href,
  ButtonLink,
}: SubDaosTabProps) => {
  const { t } = useTranslation()
  const { coreAddress, name, supportedFeatures } = useDaoInfoContext()
  const { getDaoPath } = useDaoNavHelpers()

  const subDaosSupported = supportedFeatures[Feature.SubDaos]

  return (
    <>
      {/* header min-height of 3.5rem standardized across all tabs */}
      <div className="flex min-h-[3.5rem] flex-row items-center justify-between gap-8 pb-6">
        <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-1">
          <p className="title-text text-text-body">
            {t('title.createASubDao')}
          </p>
          <p className="secondary-text">{t('info.subDaoExplanation')}</p>
        </div>

        <ButtonLink
          className="shrink-0"
          disabled={!isMember || !subDaosSupported}
          href={getDaoPath(coreAddress, 'create')}
        >
          <Add className="!h-4 !w-4" />
          {t('button.newSubDao')}
        </ButtonLink>
      </div>

      {!subDaosSupported ? (
        <NoContent
          Icon={Upgrade}
          actionNudge={t('info.submitUpgradeProposal')}
          body={t('error.daoFeatureUnsupported', {
            name,
            feature: t('title.subDaos'),
          })}
          buttonLabel={t('button.proposeUpgrade')}
          href={isMember ? upgradeToV2Href : undefined}
        />
      ) : subDaos.loading ? (
        <div className="border-t border-border-secondary pt-6">
          <Loader fill={false} />
        </div>
      ) : subDaos.data.length > 0 ? (
        <>
          <p className="title-text mb-6 border-t border-border-secondary pt-6 text-text-body">
            {t('title.numSubDaos', { count: subDaos.data.length })}
          </p>

          <GridCardContainer>
            {subDaos.data.map((props, index) => (
              <DaoCard {...props} key={index} />
            ))}
          </GridCardContainer>
        </>
      ) : (
        <NoContent
          Icon={EscalatorWarning}
          actionNudge={t('info.createFirstOneQuestion')}
          body={t('info.noSubDaosYet')}
          buttonLabel={t('button.newSubDao')}
          href={isMember ? createSubDaoHref : undefined}
        />
      )}
    </>
  )
}
