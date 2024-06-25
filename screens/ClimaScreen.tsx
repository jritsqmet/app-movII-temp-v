import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function ClimaScreen() {

  const [ciudad, setciudad] = useState("")
  const [temperatura, settemperatura] = useState(0)

  function mensaje(){
    Alert.alert("Clima", "El clima de "+ ciudad +" es de "+temperatura +" grados celcius")
  }

  return (
    <ImageBackground 
    source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/17096.jpg" }}
    style={styles.container}
    >
      <Text style={{ color:'hsl(48, 100%, 70%)', fontSize:50 }} >CLIMA</Text>
      <TextInput
        placeholder='Ingrese ciudad'
        placeholderTextColor={'white'}
        style={styles.input}
        onChangeText={ (texto)=> setciudad(texto) }
      />

      <TextInput
        placeholder='Ingresar clima'
        placeholderTextColor={'white'}
        style={styles.input}
        onChangeText={ (texto)=> settemperatura(+texto)}
        keyboardType='numeric'
      />

      <Button title='Aceptar' color={'green'} onPress={mensaje}/>


    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    backgroundColor: "#666",
    height: 50,
    width: "80%",
    marginBottom: 10,
    borderRadius:40,
    paddingHorizontal: 25,
    fontSize: 20,
    color: 'white'
  }
})