import React, { useMemo } from 'react'
import { useTheme } from '@keg-hub/re-theme'
import { Pager, Section, withAppHeader } from 'SVComponents'
import * as SVGIcons from 'SVAssets/svgs'
import { mapObj, wordCaps } from '@keg-hub/jsutils'

export const RootContainer = withAppHeader('Tap-Release-Client', props => {
  const theme = useTheme()

  const pages = useMemo(() => {
    return mapObj(SVGIcons, (key, value) => {
      return { name: wordCaps(key), items: value }
    })
  }, [ SVGIcons ])

  return (
    <Section
      style={{
        ...theme.layout.full.height,
        ...theme.layout.full.width,
        margin: 0,
        borderWidth: 0,
      }}
    >
      <Pager pages={pages} />
    </Section>
  )
})
