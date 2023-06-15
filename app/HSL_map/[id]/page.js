
import AllInMAp from '../components/showAllMap'
import GtfsRealtimeBindings  from 'gtfs-realtime-bindings'
import SearchVehicle from '../components/searchVehicle';

async function getData(){
    try {
        const response = await fetch("https://realtime.hsl.fi/realtime/vehicle-positions/v2/hsl", { cache: 'no-store' });
        const buffer = await response.arrayBuffer();
        const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
          new Uint8Array(buffer)
        );
        return feed
      }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}
async function makeDataToGeoJso(searchValue){
    let transportName = ''
    const jsonData = await getData()
    
    if (searchValue === 'All'){
        const dataByBuss = []
        for (let i = 0; i < jsonData.entity.length; i++){
        if (jsonData.entity[i]['id'].match(/\d+/g)[0] == 12 || 18){
            dataByBuss.push(jsonData.entity[i])
        }
        }
        
        const geo = []
        for (let i = 0; i < dataByBuss.length; i++){
        if (dataByBuss[i]['vehicle']['vehicle']['id'].slice(0,2) == String(12)){
            transportName = 'Helsingin Bussiliikenne Oy'
        } else if (dataByBuss[i]['vehicle']['vehicle']['id'].slice(0,2) == String(18)) {
            transportName = 'Oy Pohjolan Liikenne Ab'
        } else {
            transportName = 'Helsingin Bussiliikenne Oy'
        }
        geo.push(          
                {
                    'type': 'Feature',
                    'properties': {
                        "name":transportName,
                        'description':
                            ` <div>
                                <h5>${transportName}</h5>
                                <p>Status: ${dataByBuss[i]['vehicle']['currentStatus']}
                                <a href=/on_map/${dataByBuss[i]['vehicle']['vehicle']['id']} target="_blank" title="Opens in a new window">${dataByBuss[i]['vehicle']['vehicle']['id']}</a> 
                                ${dataByBuss[i]['vehicle']['trip']['startTime']}
                                Speed: ${(dataByBuss[i]['vehicle']['position']['speed']).toFixed(2)}
                                Station id: ${dataByBuss[i]['vehicle']['stopId']}</p>
                                </div>
                                `,         
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ (dataByBuss[i]['vehicle']['position']['longitude']).toFixed(6), (dataByBuss[i]['vehicle']['position']['latitude']).toFixed(6)].map(Number)
                    }               
            }) 
        }
        return geo
    } else {
        const dataByBuss = []
        for (let i = 0; i < jsonData.entity.length; i++){
        if (jsonData.entity[i]['id'].match(/\d+/g)[0] == searchValue){
            dataByBuss.push(jsonData.entity[i])
            }
        }
        
        
        const geo = []
        for (let i = 0; i < dataByBuss.length; i++){
            if (searchValue === '40'){
                transportName = 'HKL-Raitioliikenne'
            } else if (searchValue === '50') {
                transportName = 'HKL-Metroliikenne'
            } else if (searchValue === '90'){
                transportName = 'VR Oy'
            } else {
                transportName = 'Matkahuolto'
            }
        
        geo.push(          
                {
                    'type': 'Feature',
                    'properties': {
                        "name":transportName,
                        'description':
                            ` <div>
                                <h5>${transportName}</h5>
                                <p>Status: ${dataByBuss[i]['vehicle']['currentStatus']}
                                <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">${dataByBuss[i]['vehicle']['vehicle']['id']}</a> 
                                ${dataByBuss[i]['vehicle']['trip']['startTime']}
                                Speed: ${(dataByBuss[i]['vehicle']['position']['speed']).toFixed(2)}
                                Station id: ${dataByBuss[i]['vehicle']['stopId']}</p>
                                </div>
                                `,         
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [ (dataByBuss[i]['vehicle']['position']['longitude']).toFixed(6), (dataByBuss[i]['vehicle']['position']['latitude']).toFixed(6)].map(Number)
                    }               
            }) 
        }
        return geo

    }
}


export default async function vehiclePage({ params }) {
    console.log(params.id)
    const geodata = await makeDataToGeoJso(params.id)
    console.log((geodata)) 


    return(
        <div>
        
            <AllInMAp data={geodata} />

        </div>
    )
}