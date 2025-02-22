import { ArrowBackIosRounded, Close } from '@mui/icons-material'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { Action, ActionCategoryWithLabel } from '@dao-dao/types'

import { Button } from '../buttons'
import { IconButton } from '../icon_buttons'

export type ActionCardProps = {
  category: ActionCategoryWithLabel
  // If defined, makes the category button clickable. If an action is defined,
  // this will be the back button and show a back arrow.
  onCategoryClick?: () => void
  action?: Action
  actionCount?: number
  onRemove?: () => void
  childrenContainerClassName?: string
  children: ReactNode | ReactNode[]
}

export const ActionCard = ({
  category,
  onCategoryClick,
  action,
  actionCount = 0,
  onRemove,
  childrenContainerClassName,
  children,
}: ActionCardProps) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col overflow-x-auto rounded-lg bg-background-tertiary">
      <div className="primary-text flex flex-row items-center justify-between gap-8 border-b border-border-base p-4 text-text-body">
        <div className="flex flex-col items-start gap-x-4 gap-y-2 sm:flex-row sm:flex-wrap sm:items-center">
          <Button
            className={clsx(
              // Don't allow clicks for programmatic actions.
              (!onCategoryClick || action?.programmaticOnly) &&
                'pointer-events-none !bg-background-secondary'
            )}
            onClick={
              // Don't allow clicks for programmatic actions.
              !action?.programmaticOnly ? onCategoryClick : undefined
            }
            variant="secondary"
          >
            {
              // Don't show back arrow for programmatic actions.
              onCategoryClick && action && !action.programmaticOnly && (
                <ArrowBackIosRounded className="!h-5 !w-5" />
              )
            }

            {category.label}
          </Button>

          <div className="pl-[10px] pr-4 sm:pl-0">
            {action ? (
              <>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-xl">
                    <action.Icon />
                  </p>

                  <div className="flex flex-row items-end gap-2">
                    <p className="title-text">{action.label}</p>

                    {actionCount > 1 && (
                      <p className="caption-text">
                        ({t('info.actions', { count: actionCount })})
                      </p>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <p className="primary-text text-text-secondary">
                {t('title.chooseAnAction')}
              </p>
            )}
          </div>
        </div>

        {
          // Don't allow removing programmatic actions.
          onRemove && !action?.programmaticOnly && (
            <IconButton
              Icon={Close}
              onClick={onRemove}
              size="sm"
              variant="ghost"
            />
          )
        }
      </div>

      <div
        className={clsx('flex flex-col gap-4 p-6', childrenContainerClassName)}
      >
        {children}
      </div>
    </div>
  )
}
