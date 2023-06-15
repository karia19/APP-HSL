'use client'

import React,{ useEffect, useState } from 'react';
import styles from './page.module.css'

export const metadata = {
  title: 'APP-HSL',
  description: 'This is app for buss tram and other vehicle from hsl-api',
}


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
    <main>
      <div style={{ padding: "2rem"}}>
        <h5 className='text-center'>Search ...</h5>
      </div>
      <div className={styles.main}>
        <div className='row'>
          <div className='col-md-4'>
              <div className="card">
                <img  src="/buss.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Bussiliikenne</h5>
                  <p className="card-text">Täältä näet Helsingin Bussiliikenne Oy:n ja Oy Pohjolan Liikenne Ab:n liikenteessä olevien bussien paikan kartalla haun tapahtuessa</p>
                  <a href="/HSL_map/All" target='_blank' className="btn btn-primary">Bussiliikenne</a>
                </div>
              </div>
          </div>
          <div className='col-md-4'>
              <div className="card">
                <img src="/tram.jpeg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Raitioliikenne</h5>
                  <p className="card-text">Täältä näet Raitioliikenteen raitiovaunujen kohdan liikenteessä haukuhetkellä</p>
                  <a href="/HSL_map/40" target='_blank' className="btn btn-primary">HKL-raitioliikkene</a>
                </div>
              </div>
          </div>
          <div className='col-md-4'>
              <div className="card">
                <img src="/metr2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Metroliikkenne</h5>
                  <p className="card-text">Täältä näet Metroliikenne kohdan liikenteessä haukuhetkellä</p>
                  <a href="/HSL_map/50" target='_blank' className="btn btn-primary">HKL-Metroliikkene</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </main>
  )
}
