'use client'
import React, { useEffect, useRef, useState }from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '../../page.module.css'

const geo = '/HSL_pysakit.geojson'

const MapForAll = (props) => {
    const mapContainerRef = useRef(null);
    const [ location, setLocation ] = useState();
    const [ viewport, setViewPort ] = useState({
        longitude: 24.945831,
        latitude: 60.192059,
        zoom: 12,
       

    })

    useEffect(() => {
        if('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(({ coords }) => {
                    const { latitude, longitude } = coords;
                    setViewPort({ latitude: latitude, longitude: longitude, zoom: 12 });
                    setLocation({ latitude:latitude , longitude: longitude })
                })
        }
    },[])
    
    useEffect(() => {
            const map = new mapboxgl.Map({
                container: mapContainerRef.current,
                accessToken: process.env.NEXT_PUBLIC_MAPBOX_PASS,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [viewport.longitude, viewport.latitude], 
                zoom: viewport.zoom
            });
            map.on('load', async () => {
                //const stations = await axios.get('https://services1.arcgis.com/sswNXkUiRoWtrx0t/arcgis/rest/services/HSL_pysakit_kevat2018/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson')
                map.addSource('stations', {
                    'type': 'geojson',
                        'data': geo
                })
                map.addSource('places', {
                    'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': props.data
                        }
                })
                map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
                map.loadImage('/train.png', (error, image) => {
                    if (error) throw error;
                    map.addImage('station', image, { sdf: true });
                });
                map.addLayer({
                    /*
                    'id': 'stations',
                    'source': 'stations',
                    'type': 'symbol',
                    'layout': {
                        'icon-image': 'station',
                        'icon-size': 0.1
                    },
                    */
                    'id': 'stations',
                    'type': 'circle',
                    'source': 'stations',
                    'paint': {
                        'circle-radius': 1.1,
                        'circle-stroke-width': 0.5,
                        'circle-opacity': 0.8,
                        'circle-color': "red"
                        
                    },
                })
                map.addLayer({
                    'id': 'places',
                    'type': 'circle',
                    'source': 'places',
                    'paint': {
                        'circle-radius': 2.8,
                        'circle-stroke-width': 1.7,
                        'circle-opacity': 0.8,
                        'circle-color': "blue"
                        
                    },
                    'circle-color': [
                        'match',
                        ['get', 'name'],
                        'Oy Pohjolan Liikenne Ab',
                        '#fbb03b',
                        'Helsingin Bussiliikenne Oy',
                        '#fbb03b',
                        /* other */ '#ccc'
                        ]
                });
                map.on('click', 'places', (e) => {

                    const coordinates = e.features[0].geometry.coordinates.slice();
                    const description = e.features[0].properties.description;
                     
                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }
                     
                    new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(description)
                        .addTo(map);
                    });
                     
                map.on('mouseenter', 'places', () => {
                    map.getCanvas().style.cursor = 'pointer';
                });
                map.on('mouseleave', 'places', () => {
                    map.getCanvas().style.cursor = '';
                });
                    
            })
            //return () => map.remove(); // Clean up on unmount

    },[location])

    

    return  <div className={styles.mapbox} ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />;
        
            
 
}


export default MapForAll;