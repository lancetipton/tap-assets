import React from 'react'
import { Icon as KCIcon, View } from '@keg-hub/keg-components'

export const SvgIcon = props => {
  const { Icon } = props
  return (
    <View className='icon-wrapper' >
      <KCIcon
        Component={Icon}
      />
    </View>
  )
}