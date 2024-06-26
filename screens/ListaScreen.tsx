import { StyleSheet, Text, View, FlatList, Image} from 'react-native'
import React, { useEffect, useState } from 'react'

import futurama from "../assets/data/characters.json"


export default function ListaScreen() {

  const API_FUTURAMA = 'https://api.sampleapis.com/futurama/characters'
  const [data, setdata] = useState([])

  useEffect(() => {
   fetch( API_FUTURAMA)
   .then( (response) => response.json() )
   .then( (datos) => setdata(datos) )
   .catch ( error => console.log(error) )
   
    console.log(data);
    
  }, [])
  

  return (
    <View>
      <Text style={{fontSize:40, textAlign:'center'}}>Lista</Text>
      <FlatList 
        data={ data }
        renderItem={ ( {item} ) => 
          <View style={styles.item}>
            <Text>{item.name.first} {item.name.last}</Text>
            <Text>{item.species}</Text>
            <Image 
              src={item.images.main}
              style={styles.img}
            />
          </View>
          
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    backgroundColor:'#666',
    margin:5
  },
  img:{
    width:40,
    height:100
  }
})