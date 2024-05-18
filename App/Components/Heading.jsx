import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Heading=({text, isViewAll=false})=> {
  return (
    <View style={styles.container}>
       <Text style={styles.heading}>{text}</Text>
       {isViewAll&& <Text>View All</Text>} 
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        justifyContent:'space-between'
    }
  });
  
  export default Heading;