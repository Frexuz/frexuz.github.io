import React from 'react'

import { MenuLink, Wrapper } from '@components'

const styles = {
  wrapper: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
  },
}

const Menu = () => (
  <Wrapper>
    <div style={styles.wrapper}>
      <MenuLink text="Work" />
    </div>
  </Wrapper>
)

export default Menu
