'use client'

import React,{ useEffect, useState } from 'react';
import styles from './page.module.css'

export default function Home() {
  const [location, setLocation] = useState();

  
  useEffect(() => {
    if('geolocation' in navigator) {
        // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            setLocation({ latitude, longitude });
        })
    }
  
  }, []);
  console.log(location)

   
  return (
    <main className={styles.main}>
      <div>
        <h3>Hello ...</h3>
        
       
      </div>
    </main>
  )
}
