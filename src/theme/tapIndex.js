import { kegComponentsTheme } from 'SVTheme/kegComponentsTheme'
import * as components from './components'
import { deepMerge } from '@keg-hub/jsutils'

export const theme = deepMerge(kegComponentsTheme, {
  ...components,
})
