import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useUser, useClerk } from "@clerk/clerk-expo";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const { user } = useUser();
  const clerk = useClerk();
  const navigation = useNavigation();

  const ProfileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
      navigateTo: "Home"
    },
    {
      id: 2,
      name: "My Booking",
      icon: "bookmarks",
      navigateTo: "Bookings"
    },
    {
      id: 3,
      name: "Logout",
      icon: "log-out",
      action: () => clerk.signOut()
    },
  ];

  const handlePress = (item) => {
    if (item.action) {
      item.action();
    } else if (item.navigateTo) {
      navigation.navigate(item.navigateTo);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          paddingTop: 30,
          backgroundColor: "#aafaf3",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Profile
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={{ uri: user?.imageUrl }}
            style={{ width: 90, height: 90, borderRadius: 99 }}
          />
          <Text
            style={{
              fontSize: 26,
              fontWeight: "500",
              color: "black",
              marginTop: 8,
            }}
          >
            {user.fullName}
          </Text>

          <Text
            style={{
              fontSize: 15,
              fontWeight: "normal",
              color: "black",
              marginTop: 5,
            }}
          >
            {user.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:100 }}>
        <FlatList 
          data={ProfileMenu}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                marginBottom: 20,
                padding: 10,
                backgroundColor: '#f9f9f9',
                borderRadius: 10,
                width: 200,  
                alignSelf: 'center'  
              }}
              onPress={() => handlePress(item)}
            >
              <Ionicons name={item.icon} size={35} color="#8E3FFF" />
              <Text style={{ fontSize: 20 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />  
      </View>
    </View>
  );
}
