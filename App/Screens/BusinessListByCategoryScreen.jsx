import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute , useNavigation} from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

const BusinessListByCategoryScreen=()=> {
    const param = useRoute().params;
    useEffect(()=>{
       console.log("Category : ", param.category)
    }, [])
  return (
    <View style={{padding:20, paddingTop: 30}}>
      <TouchableOpacity style={{display:'flex', flexDirection:'row', gap: 10, alignItems:'center'}}>
        onPress={()=> goBack()}
      <Ionicons name="arrow-back" size={30} color="black" />
      <Text style={{fontSize: 25, fontWeight:'600'}}>{param?.category}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default BusinessListByCategoryScreen;