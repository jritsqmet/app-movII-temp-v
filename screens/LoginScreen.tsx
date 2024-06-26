import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function LoginScreen( {navigation} : any) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, color: '#2b1d12' }} >Login</Text>
      <TextInput
        placeholder='Ingresar nick'
        style={styles.input}
      />
      <TextInput
        placeholder='Ingrese contraseña'
        style={styles.input}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.btn} onPress={ ()=> navigation.navigate('BottomTab') } >

        <View style={styles.fila}>
          <Text style={{ fontSize: 20 }}>INGRESAR</Text>
          <Image
            source={require('../assets/image/image.png')}
            style={styles.img}
          />
        </View>
        
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#789180',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    width: "80%",
    borderRadius: 20,
    margin: 10,
    fontSize: 20,
    paddingHorizontal: 10
  },
  btn: {
    backgroundColor: '#6ff189',
    width: "70%",
    height: 70,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent:'center'
  },
  img: {
    height: 40,
    width: 40
  },
  fila:{
    flexDirection:'row-reverse'
  }
})