import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

const Header = () => {
  const { user, isLoading } = useUser();
  return user&&(
    // User Profile
    <View style={styles.container}>
     <View style={styles.profileContainer}>
      <View>
        <Image source={{ uri: user?.imageUrl }}
        style={styles.userImage}
        />
      </View>
      <View>
        <Text style={{fontSize: 15}}>Welcome 😊</Text>
        <Text style={{fontSize: 20, fontWeight:'bold'}}>{user?.fullName}</Text>
      </View>
     </View>
      
      {/* ============================================== */}
     {/* SearchBar Section */}
     <View style={{marginTop: 15, display: 'flex', flexDirection: 'row', gap:10}}>
        <TextInput placeholder="Search "
        style={styles.SearchBox}
        />
        <View style={styles.SearchBtn}>
        <Text>🔍</Text>
        </View>
     </View>

    </View>


  );
};

const styles = StyleSheet.create({
   
    container:{
       padding: 20,
       paddingTop: 25,
       borderBottomLeftRadius: 25,
       borderBottomRightRadius:25,
       backgroundColor: '#aafaf3'
    },

    profileContainer: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        gap: 15,
      },

    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
      },
    
    SearchBox: {
        padding: 7,
        paddingHorizontal: 16, 
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '85%',
        fontSize: 16,
    },
    
    SearchBtn:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    }

});

export default Header;
