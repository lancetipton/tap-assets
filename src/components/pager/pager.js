import { View } from 'SVComponents'
import React, { useState } from 'react'
import { Page } from 'SVComponents/page'
import { PageNav } from 'SVComponents/pageNav'
import { Pager as RNPager, PagerProvider } from '@crowdlinker/react-native-pager'

const buildPages = (pages, activeIndex) => {
  return pages.map(({name, items}, index) => {
    return (
      <Page
        key={name}
        title={name}
        items={items}
        active={activeIndex === index}
      />
    )
  })
}

export const Pager = props => {
  const { initial=0, pages } = props
  const [activeIndex, onChange] = useState(initial)

  return (
    <PagerProvider
      activeIndex={activeIndex}
      onChange={onChange}
    >
      <View className='pager-wrapper' >
        <View className='pager-nav-wrapper' >
          <PageNav
            activeIndex={activeIndex}
            onChange={onChange}
          />
        </View>
        <View className='pager-pages-wrapper' >
          <RNPager>
            {buildPages(pages, activeIndex)}
          </RNPager>
        </View>
      </View>
    </PagerProvider>
  )
}