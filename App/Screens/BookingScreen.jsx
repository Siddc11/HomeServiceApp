import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import BusinessListItem from '../Screens/BusinessListItem';
import { useNavigation } from '@react-navigation/native';

export default function BookingScreen() {
  const { user } = useUser();
  const [bookingList, setBookingList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      getUserBookings();
    }
  }, [user]);

  const getUserBookings = () => {
    setLoading(true);
    GlobalApi.getUserBooking(user?.primaryEmailAddress?.emailAddress)
      .then(resp => {
        setBookingList(resp.bookings);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      });
  };
  const navigation = useNavigation()
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, textAlign: 'center', marginBottom: 15, fontWeight: 'bold' }}>My Bookings🔖</Text>
      
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        data={bookingList}
        keyExtractor={(item, index) => item.id.toString()} 
        onRefresh={getUserBookings}
        refreshing={loading}
        renderItem={({ item }) => (
          <BusinessListItem 
            business={item?.businessList} 
            booking={item} 
          />
        )}
      />
    </View>
  );
}
