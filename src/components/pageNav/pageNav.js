import React from 'react'
import { Text, Touchable, View } from '@keg-hub/keg-components'
import { useTheme } from '@keg-hub/re-theme'


export const PageNav = props =>  {
  const { activeIndex, onChange, incrementBy = 1 } = props
  const { pageNav:styles } = useTheme()

  return (
    <View style={styles.main}>
      <Touchable
        style={[styles.toggle, styles.left]}
        onPress={() => onChange(activeIndex - incrementBy)}
      >
        <Text>{`<`}</Text>
      </Touchable>
      <Text style={styles.activeIndex}>
        {activeIndex}
      </Text>
      <Touchable
        style={[styles.toggle, styles.right]}
        onPress={() => onChange(activeIndex + incrementBy)}
      >
        <Text>{`>`}</Text>
      </Touchable>
    </View>
  )
}