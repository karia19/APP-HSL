'use client'

import styles from '../../page.module.css'
import Link from "next/link"

export default async function SearchVehicle(){
    
   
 
    return(
        <div>
            <div className={styles.mapOverlay}>
                <div className={styles.mapOverlayInner}>
                    <ul className="nav  justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/HSL_map/All">Bussiliikenne</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/HSL_mapp/40">HKL-Raitioliikkene</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/HSL_map/50">HKL-Metroliikkene</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/HSL_map/90">VR Oy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/HSL_map/100">Matkahuolto</a>
                        </li>
                    </ul>
                </div>
              
            </div>
        </div>
        
    )
}

