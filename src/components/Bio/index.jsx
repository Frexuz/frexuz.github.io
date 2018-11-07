import React from 'react'
import { images } from '@media'

const styles = {
  wrapper: {
    width: 1200,
    margin: '0 auto',
    flexDirection: 'row',
    justiftContent: 'flex-start',
  },
  imgWrapper: {
    flex: 1,
    minHeight: 600,
  },
  img: {
    width: '100%',
    display: 'block',
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 46,
    backgroundColor: '#000',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: 3,
  },
  subTitle: {
    marginTop: 5,
    fontSize: 24,
    backgroundColor: '#000',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: 3,
  },
  aka: {
    position: 'absolute',
    top: -16,
    right: 2,
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 3,
  },
}

const Bio = () => (
  <div style={styles.wrapper}>
    <div style={styles.info}>
      <div>
        <h1 style={styles.title}>Kristian Gerardsson</h1>
        <h4 style={styles.aka}>AKA FREXUZ</h4>
      </div>
      <h2 style={styles.subTitle}>Full stack developer: Rails + React</h2>
    </div>
    <div style={styles.imgWrapper}>
      <img src={images.profilePicture} alt="" style={styles.img} />
    </div>
  </div>
)

export default Bio
