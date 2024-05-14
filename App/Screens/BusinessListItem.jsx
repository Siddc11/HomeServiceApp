import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const BusinessListItem = ({ business }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
        display: 'flex',
        flexDirection:'row',
        gap: 20
      }}
      
      onPress={() => navigation.push('Business-Detail', { business })}
    >
      <Image
        source={{ uri: business?.images[0]?.url }}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      />
      <View style={{display:'flex', gap:8}}>
        <Text style={{fontSize: 15, color:'#3c3c3d'}}>{business.contactPerson}</Text>
        <Text style={{fontWeight:'bold', fontSize:18}}>{business.name}</Text>
        <Text style={{fontSize: 14, color:'#3c3c3d'}}>
        <FontAwesome6 name="location-dot" size={20} color="#8E3FFF"/>
          {business.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessListItem;
