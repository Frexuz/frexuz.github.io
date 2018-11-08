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
      marginTop: 10,
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
    emojis: {
      marginTop: 60,
      fontSize: 32,
    },
    text: {
      marginTop: 20,
      fontSize: 18,
      fontWeight: 700,
      textAlign: 'center',
    },
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.info}>
        <p style={styles.emojis}>
          <span role="img" aria-label="Computers">
            💻💻💻
          </span>
        </p>
        <h2 style={styles.title}>I&apos;m a coder</h2>
        <h3 style={styles.text}>
          Never satisfied with what I currently know. Always on the hunt to
          learn more and see what&apos;s next. I like efficiency and doing
          things right.
        </h3>

        <p style={styles.emojis}>
          <span role="img" aria-label="Airplanes">
            ✈️✈️✈️
          </span>
        </p>
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

        <p style={styles.emojis}>
          <span role="img" aria-label="Cats">
            😻😻😻
          </span>
        </p>
        <h2 style={styles.title}>I love cats</h2>
        <h3 style={styles.text}>I have two.</h3>
      </div>
    </div>
  )
}

BioRandom.propTypes = {
  isMobile: PropTypes.bool,
}

export default BioRandom
