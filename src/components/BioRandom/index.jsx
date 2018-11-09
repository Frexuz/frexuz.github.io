/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import PropTypes from 'prop-types'

import { images } from '@media'
import { Tag } from '@components'

const BioRandom = ({ isMobile }) => {
  const styles = {
    wrapper: {
      alignItems: 'center',
    },
    imgWrapper: {
      marginBottom: 50,
      padding: 7,
      borderRadius: '50%',
      background: 'linear-gradient(45deg, #cc0178, #f66, #cc0178)',
      width: isMobile ? 150 : 250,
      height: isMobile ? 150 : 250,
      boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.2)',
    },
    img: {
      width: '100%',
      display: 'block',
      borderRadius: '50%',
      height: '100%',
      backgroundSize: 'cover',
      boxShadow: '0 0 30px 5px rgba(0, 0, 0, 0.25) inset',
      backgroundColor: '#fff',
      backgroundImage: `url(${images.profilePicture})`,
    },
    fill: {
      stroke: 'none',
      fill: '#fff',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: 1.5,
    },
    info: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: isMobile ? 20 : 32,
      backgroundColor: '#000',
      color: '#fff',
      padding: '5px 10px',
      borderRadius: 3,
      textAlign: 'center',
      marginTop: 60,
    },
    tags: {
      flexDirection: 'row',
      marginTop: 20,
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    tag: {
      margin: 2,
      backgroundColor: '#aaa',
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
    emojis: {
      marginTop: 20,
      fontSize: 32,
      marginBottom: 10,
    },
    text: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: 700,
      textAlign: 'center',
      lineHeight: 1.4,
    },
    sentence: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      textAlign: 'center',
      lineHeight: 1.4,
      fontSize: 18,
      fontWeight: 700,
    },
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.info}>
        <div style={styles.sentence}>
          <p style={{ marginLeft: 2, marginRight: 4 }}>
            Born in 🇸🇪 Sweden, also speak 🇵🇱 Polish, have lived in 🇲🇹 Malta, and
            currently in 🇭🇰 Hong Kong.
          </p>
        </div>

        <h2 style={styles.title}>I&apos;m a coder</h2>
        <h3 style={styles.text}>
          Self-taught since the age of 13. Never satisfied. Always learning.
          Performance. Efficiency and tools. Doing things right.
        </h3>

        <h2 style={styles.title}>I&apos;m a traveler</h2>
        <h3 style={styles.text}>My goal is to visit 100 countries. 71 left!</h3>
        <div style={styles.tags}>
          <Tag text="🇨🇳 China" style={styles.tag} />
          <Tag text="🇭🇷 Croatia" style={styles.tag} />
          <Tag text="🇩🇰 Denmark" style={styles.tag} />
          <Tag text="🇫🇷 France" style={styles.tag} />
          <Tag text="🇩🇪 Germany" style={styles.tag} />
          <Tag text="🇬🇷 Greece" style={styles.tag} />
          <Tag text="🇭🇰 Hong Kong" style={styles.tag} />
          <Tag text="🇮🇩 Indonesia" style={styles.tag} />
          <Tag text="🇮🇹 Italy" style={styles.tag} />
          <Tag text="🇯🇵 Japan" style={styles.tag} />
          <Tag text="🇰🇪 Kenya" style={styles.tag} />
          <Tag text="🇱🇹 Lithuania" style={styles.tag} />
          <Tag text="🇲🇴 Macau" style={styles.tag} />
          <Tag text="🇲🇾 Malaysia" style={styles.tag} />
          <Tag text="🇲🇹 Malta" style={styles.tag} />
          <Tag text="🇵🇭 Philippines" style={styles.tag} />
          <Tag text="🇵🇱 Poland" style={styles.tag} />
          <Tag text="🇪🇸 Spain" style={styles.tag} />
          <Tag text="🇸🇬 Singapore" style={styles.tag} />
          <Tag text="🇰🇷 South Korea" style={styles.tag} />
          <Tag text="🇸🇪 Sweden" style={styles.tag} />
          <Tag text="🇨🇭 Switzerland" style={styles.tag} />
          <Tag text="Taiwan" style={styles.tag} />
          <Tag text="🇹🇿 Tanzania" style={styles.tag} />
          <Tag text="🇹🇭 Thailand" style={styles.tag} />
          <Tag text="🇬🇧 UK" style={styles.tag} />
          <Tag text="🇺🇸 USA" style={styles.tag} />
          <Tag text="🇻🇦 Vatican City" style={styles.tag} />
          <Tag text="🇻🇳 Vietnam" style={styles.tag} />
        </div>

        <h2 style={styles.title}>I love cats</h2>
        <h3 style={styles.text}>I have two.</h3>
        <span role="img" aria-label="Cats" style={styles.emojis}>
          😻😻
        </span>
        <a
          href="https://instagram.com/frexuz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={styles.icon}>
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                style={styles.fill}
                d="M18.07,11.25a.25.25,0,0,0-.24.31,6,6,0,1,1-11.65,0,.25.25,0,0,0-.24-.31H.5a.5.5,0,0,0-.5.5V17.5A6.51,6.51,0,0,0,6.5,24h11A6.51,6.51,0,0,0,24,17.5V11.75a.5.5,0,0,0-.5-.5Z"
              />
              <path
                style={styles.fill}
                d="M23.5,9.75a.5.5,0,0,0,.5-.5V6.5A6.51,6.51,0,0,0,17.5,0H11.75a.5.5,0,0,0-.5.5v4a.75.75,0,0,1-1.5,0V.5a.5.5,0,0,0-.5-.5h-.5a.5.5,0,0,0-.5.5v4a.75.75,0,0,1-1.5,0v-4A.5.5,0,0,0,6.23,0l-.55,0a.5.5,0,0,0-.43.5v4a.75.75,0,0,1-1.5,0V1A.25.25,0,0,0,3.38.81,6.5,6.5,0,0,0,0,6.5V9.25a.5.5,0,0,0,.5.5H6.7a.5.5,0,0,0,.41-.21,6,6,0,0,1,9.79,0,.5.5,0,0,0,.41.21Zm-6-5.25a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1h-1a1,1,0,0,1-1-1Z"
              />
              <circle style={styles.fill} cx="12" cy="13" r="3" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}

BioRandom.propTypes = {
  isMobile: PropTypes.bool,
}

export default BioRandom
