;
import styles from '../page.module.css'
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
/*
const query = gql`
  query Now {
    now(id: "1"
  )
}`;
*/
const query = gql`
  query Stops {
    stops {
      gtfsId
      name
      lat
      lon
      zoneId
    }
}`;

async function GetApolloData(){
  //const data = await getClient().query({ query })
  
  return ""
}

export default async function HSL_map(){
    const response = await GetApolloData()    
    console.log(response)
    return (
        <div>
            <h2>Hello from Apollo</h2>
              
        </div>
    )
}