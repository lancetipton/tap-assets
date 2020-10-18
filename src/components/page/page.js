import { View, H4 } from '@keg-hub/keg-components'
import { IconGrid } from 'SVComponents'
import React from 'react'

export const Page = props => {
  const { title, items } = props

  return (
    <View className='page-wrapper' >
      <H4 className='page-title' >
        {title}
      </H4>
      <IconGrid Icons={items} />
    </View>
  )
}