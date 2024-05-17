import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import BusinessListItem from '../Screens/BusinessListItem'

export default function BookingScreen() {
 
  const {user} = useUser();
  const [bookingList, setBookingList] = useState();
  useEffect(()=>{
   user&&getUserBookings()
  },[user])

  const getUserBookings=()=>{
    GlobalApi.getUserBooking(user.primaryEmailAddress.emailAddress).then(resp=>{
      setBookingList(resp.bookings);
    })
  }
  

  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize:26, textAlign:'center', marginBottom:15, fontWeight:'bold'}}>My Bookings🔖</Text>

      <View>
        <FlatList 
        data={bookingList}
        renderItem={({item, index})=>(
          <BusinessListItem business={item?.businessList}
           booking = {item}
          />
        )}
        />
      </View>
    </View>
  )
}