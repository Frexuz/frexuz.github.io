import React from 'react'

import { cv } from '@media'
import { CVItem } from '@components'

const CV = () =>
  cv.map(cvItem => <CVItem key={`CVItem${cvItem.name}`} {...cvItem} />)

export default CV
