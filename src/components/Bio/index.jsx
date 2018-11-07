import React from 'react'

import { images } from '@media'
import { Tag } from '@components'

const styles = {
  wrapper: {
    padding: 50,
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
  imgWrapper: {
    width: 250,
    height: 250,
    marginBottom: 50,
  },
  img: {
    width: '100%',
    display: 'block',
    borderRadius: '50%',
    height: '100%',
    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
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
    backgroundColor: '#cc0178',
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
  socialLinks: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: '#ccc',
    borderRadius: 16,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 2,
    marginRight: 2,
  },
  fill: {
    fill: '#fff',
    stroke: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.5,
  },
  tags: {
    flexDirection: 'row',
    marginTop: 20,
  },
  tag: {
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: '#aaa',
  },
}
const Bio = () => (
  <div style={styles.wrapper}>
    <div style={styles.socialLinks}>
      <div style={styles.icon}>
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path
            d="M5.67,22.63H.81V8.7H5.67Zm10.09-9.39a2.14,2.14,0,0,0-2.14,2.14v7.25H8.51V8.7h5.11v1.59a6.76,6.76,0,0,1,4.28-1.6c3.17,0,5.37,2.35,5.37,6.81v7.13H17.9V15.38A2.14,2.14,0,0,0,15.76,13.23Zm-10-9.36a2.5,2.5,0,1,1-2.5-2.5A2.5,2.5,0,0,1,5.74,3.88Z"
            style={styles.fill}
          />
        </svg>
      </div>
      <div style={styles.icon}>
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            d="M14.41,22.35a.5.5,0,0,0,.64.48,11.25,11.25,0,1,0-6.24,0,.5.5,0,0,0,.64-.48V20A2.81,2.81,0,0,1,6,18.28,6.07,6.07,0,0,0,4.64,16c2.85.69,2.9,2.54,4.84,1.67a4,4,0,0,1,.63-1.82c-2.2-.25-4.52-.6-4.52-4.4a3.84,3.84,0,0,1,1-2.66,3.56,3.56,0,0,1,.1-2.62s.83-.27,2.73,1a9.39,9.39,0,0,1,5,0c1.89-1.28,2.72-1,2.72-1a3.56,3.56,0,0,1,.1,2.62,3.83,3.83,0,0,1,1,2.66c0,3.81-2.32,4.15-4.53,4.39a3.83,3.83,0,0,1,.68,2.33Z"
            style={styles.fill}
          />
        </svg>
      </div>
      <div style={styles.icon}>
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            d="M1.49,12A10.49,10.49,0,0,0,13.76,22.4a.53.53,0,0,1,.35.06,6.08,6.08,0,0,0,3,.79A6.16,6.16,0,0,0,22.42,14a.54.54,0,0,1-.07-.35A10.65,10.65,0,0,0,22.48,12,10.49,10.49,0,0,0,10.24,1.61a.53.53,0,0,1-.35-.06,6.07,6.07,0,0,0-3-.8A6.16,6.16,0,0,0,1.56,10a.54.54,0,0,1,.06.35A10.57,10.57,0,0,0,1.49,12ZM12.1,5c3.17.19,5,1.59,5.21,2.9A1.34,1.34,0,0,1,15.85,9.4c-1.43,0-1.58-1.92-4.05-1.92-1.11,0-2.06.47-2.06,1.47,0,2.11,7.92.88,7.92,5.53,0,2.68-2.13,4.43-5.32,4.43-2.8,0-5.62-1.28-5.6-3.47a1.23,1.23,0,0,1,1.15-1.27c1.65,0,1.63,2.46,4.26,2.46,1.84,0,2.47-1,2.47-1.71,0-2.54-8-1-8-5.76C6.66,6.57,8.78,4.79,12.1,5Z"
            style={styles.fill}
          />
        </svg>
      </div>
      <div style={styles.icon}>
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            d="M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z"
            style={styles.fill}
          />
          <path
            d="M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z"
            style={styles.fill}
          />
        </svg>
      </div>
    </div>
    <div style={styles.imgWrapper}>
      <img src={images.profilePicture} alt="" style={styles.img} />
    </div>
    <div style={styles.info}>
      <div>
        <h1 style={styles.title}>Kristian Gerardsson</h1>
        <h4 style={styles.aka}>AKA FREXUZ</h4>
      </div>
      <h2 style={styles.subTitle}>Full stack developer</h2>
      <div style={styles.tags}>
        <Tag text="Ruby on Rails" style={styles.tag} />
        <Tag text="SCSS" style={styles.tag} />
        <Tag text="React / React Native" style={styles.tag} />
        <Tag text="MySQL / Postgres" style={styles.tag} />
        <Tag text="GraphQL" style={styles.tag} />
        <Tag text="Redis" style={styles.tag} />
        <Tag text="AWS" style={styles.tag} />
        <Tag text="UX" style={styles.tag} />
        <Tag text="..." style={styles.tag} />
      </div>
    </div>
  </div>
)

export default Bio
