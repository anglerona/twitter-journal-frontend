import React from 'react'
import styles from './trending.module.css'

export default function trending() {
  return (
      <trending className={styles.main}>
          <div>Trending Topic of the Day: </div>
          <br></br>
          <img alt="Trending Topic Image/Description"></img>
      </trending>
    
  )
}
