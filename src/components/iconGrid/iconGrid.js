import React from 'react'
import { SvgIcon } from 'SVComponents/svgIcon'
import { Grid, Column } from '@keg-hub/keg-components'
import { mapObj } from '@keg-hub/jsutils'

export const IconGrid = props => {
  const { Icons } = props

  return (
    <Grid>
      {mapObj(Icons, (name, Icon) => {
        return (
          <Column
            key={name}
            className='icon-column'
          >
            <SvgIcon Icon={Icon} name={name} />
          </Column>
        )
      })}
    </Grid>
  )
}