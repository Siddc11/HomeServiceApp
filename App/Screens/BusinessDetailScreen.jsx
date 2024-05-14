import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';
import Heading from "../Components/Heading";
import BusinessPhotos from "./BusinessPhotos";

const BusinessDetailScreen = () => {
  const param = useRoute().params;
  const [business, setBusiness] = useState(null);
  const navigation = useNavigation();
  const [readMore, setIsReadMore] = useState(false);

  useEffect(() => {
    if (param && param.business) {
      setBusiness(param.business);
    }
  }, [param]);

  if (!business) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
    <ScrollView style={{height:'91%'}}>
      <TouchableOpacity
        style={{
          position: "absolute",
          zIndex: 10,
          padding: 10,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 50,
          top: 20,
          left: 20,
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>

      <Image
        source={{ uri: business?.images[0]?.url }}
        style={{ width: "100%", height: 300 }}
      />

      <View style={styles.container}>
        <Text style={{fontSize:25, fontWeight:'bold'}}>{business.name}</Text>
        <View style={styles.subContainer}>
          <Text style={{fontWeight:'400', fontSize:20, color:'#8E3FFF'}}>{business.contactPerson} 👨‍⚕️</Text>
          <Text style={{ 
            padding: 3,
            color:'#8E3FFF',
            backgroundColor: '#f2e3fa',
            fontSize: 15, 
            borderRadius: 5, }}>{business.category.name}</Text>
        </View>
    
        <Text style={{fontSize: 15, fontWeight:'300', color:'grey'}}>
        <FontAwesome6 name="location-dot" size={25} color="#8E3FFF" style={{}}/>
        {business.address}</Text>

        <View style={{borderWidth:0.5, borderColor:'grey', marginTop:20, marginBottom:20}}></View>
           <View>
            <Heading text={'About'}/>
            <Text
            style={{
                color:'grey',
                lineHeight:28,
                fontSize: 16,
                fontWeight:'500'
            }} numberOfLines={readMore?20:5}>{business.about}</Text>
            <TouchableOpacity
             onPress={()=>setIsReadMore(!readMore)}
            >
            <Text style={{color:'#8E3FFF', fontSize:16, fontWeight:'400'}}>{readMore?'Read Less':'Read More'}</Text>
            </TouchableOpacity>
        </View>

        <View style={{borderWidth:0.5, borderColor:'grey', marginTop:20, marginBottom:20}}></View>
        <BusinessPhotos business={business}/>
      </View>
    </ScrollView>
    <View style={{display:"flex", flexDirection:'row', gap:8, margin:4,  backgroundColor: 'transparent'}}>
        <TouchableOpacity style={styles.msgbtn}>
            <Text style={{
                textAlign:'center',
                fontSize:18,
                fontWeight:'500',
                color: '#8E3FFF'
            }}>Message</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bookbtn}>
            <Text style={{
                textAlign:'center',
                fontSize:18,
                fontWeight:'500',
                color: '#FFF'
            }}>Book Appointment</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

export default BusinessDetailScreen;

const styles=StyleSheet.create({
    container:{
        padding:20,
        display:'flex',
        gap:7
    },
    subContainer:{
        display:'flex',
        flexDirection:'row',
        gap:20,
        alignItems:'center'
    },
    msgbtn:{
        padding: 15, 
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#8E3FFF',
        borderRadius:99,
        flex:1
    },
    bookbtn:{
        padding: 15, 
        backgroundColor:'#8E3FFF',
        borderWidth:1,
        borderColor:'#8E3FFF',
        borderRadius:99,
        flex:1
    }
})
