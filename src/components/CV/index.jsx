import React from 'react'

import { cv } from '@media'
import { CVItem } from '@components'

const styles = {
  wrapper: {
    margin: 50,
    marginTop: 20,
    alignItems: 'center',
  },
}
const CV = () =>
  cv.map(cvItem => <CVItem key={`CVItem${cvItem.name}`} {...cvItem} />)

export default CV
