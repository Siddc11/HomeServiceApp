import { View, Text ,Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function BusinessListItemSmall({business}) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container}
     onPress={()=>navigation.push('Business-Detail', {business:business})}
    >
      <Image
      source={{uri:business?.images[0]?.url}}
      style={{height:100, width:150, borderRadius:10}}
      />
      <View style={{padding:7, display:'flex', gap: 3}}>
        <Text style={{fontSize: 14, fontWeight:'500'}}>{business?.name}</Text>
        <Text style={{fontSize: 12, marginTop: 3}}>{business?.contactPerson}</Text>
        <Text style={
            {fontSize: 10, 
            padding: 3,
            color:'#8E3FFF',
            backgroundColor: '#f2e3fa',
            borderRadius: 5, 
            alignSelf: 'flex-start',
            paddingHorizontal: 10,
            marginTop: 4
            }}>{business?.category.name}</Text>

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10
    }
})