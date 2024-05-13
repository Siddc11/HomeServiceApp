import { View, Text, Image } from "react-native";
import React from "react";

const BusinessListItem = ({ business }) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
        display: 'flex',
        flexDirection:'row',
        gap: 20
      }}
    >
      <Image
        source={{ uri: business?.images[0]?.url }}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      />
      <View style={{display:'flex', gap:8}}>
        <Text style={{fontSize: 15, color:'#3c3c3d'}}>{business.contactPerson}</Text>
        <Text style={{fontWeight:'bold', fontSize:18}}>{business.name}</Text>
        <Text style={{fontSize: 14, color:'#3c3c3d'}}>{business.address}</Text>
        <Text style={{fontSize: 12, color:'#3c3c3d'}}>{business.email}</Text>
      </View>
    </View>
  );
};

export default BusinessListItem;
