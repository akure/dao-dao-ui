import { Loader } from '@dao-dao/stateless'
import { WidgetLocation } from '@dao-dao/types'

import { useWidgets } from '../../widgets'
import { SuspenseLoader } from '../SuspenseLoader'

export const DaoWidgets = () => {
  const loadingWidgets = useWidgets({
    // Only load home widgets.
    location: WidgetLocation.Home,
  })

  return !loadingWidgets.loading && loadingWidgets.data.length > 0 ? (
    <div className="flex flex-col gap-2">
      {loadingWidgets.data.map(({ WidgetComponent }, index) => (
        <div key={index}>
          <SuspenseLoader fallback={<Loader />}>
            <WidgetComponent />
          </SuspenseLoader>
        </div>
      ))}
    </div>
  ) : null
}
