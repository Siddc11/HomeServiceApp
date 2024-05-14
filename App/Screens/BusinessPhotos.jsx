import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import Heading from '../Components/Heading';

const BusinessPhotos = ({ business }) => {
  return (
    <View>
      <Heading text={"Photos"} />
      <FlatList
      numColumns={2}
        data={business.images}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }}
            style={{width:'100%', flex:1, borderRadius:15, margin:7, height:120}}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        
      />
    </View>
  )
}


export default BusinessPhotos;
