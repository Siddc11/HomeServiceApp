import { View, Text ,Image, StyleSheet} from 'react-native'
import React from 'react'

export default function BusinessListItemSmall({business}) {
  return (
    <View style={styles.container}>
      <Image
      source={{uri:business?.images[0]?.url}}
      style={{height:100, width:150, borderRadius:10}}
      />
      <View style={{padding:7, display:'flex', gap: 3}}>
        <Text style={{fontSize: 14, fontWeight:'500'}}>{business?.name}</Text>
        <Text style={{fontSize: 12, marginTop: 3}}>{business?.contactPerson}</Text>
        <Text style={
            {fontSize: 11, 
            padding: 3,
            color:'#8E3FFF',
            backgroundColor: '#f2e3fa',
            borderRadius: 5, 
            alignSelf: 'flex-start',
            paddingHorizontal: 10,
            marginTop: 4
            }}>{business?.category.name}</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10
    }
})