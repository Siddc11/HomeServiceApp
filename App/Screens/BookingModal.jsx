import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import Heading from "../Components/Heading";
import { ScrollView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import GlobalApi from "../Utils/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import moment from 'moment'

const BookingModal = ({businessId, hideModal }) => {
  const [timeList, setTimeList] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [note , setNote] = useState();
  const {user} = useUser(); 

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 9; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }

    for (let i = 2; i <= 10; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeList(timeList);
  };
  const [selectedDate, setSelectedDate] = useState();

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  const createBooking = () => {
    if (!selectedDate || !selectedTime) {
      ToastAndroid.show('Please Select Date and Time', ToastAndroid.LONG);
      return;
    }
    
    const data = {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress.emailAddress,
      time: selectedTime,
      date: moment(selectedDate).format('DD-MMM-yyyy'),
      note: note,
      businessId: businessId,
    };
  
    GlobalApi.createBooking(data)
      .then(resp => {
        console.log("Resp", resp);
        ToastAndroid.show('Booking Created Successfully', ToastAndroid.LONG);
        hideModal();
      })
      .catch(error => {
        console.error("Error creating booking", error);
        ToastAndroid.show('Failed to create booking', ToastAndroid.LONG);
      });
  };
  
  return (
    <ScrollView>
    <KeyboardAvoidingView style={{ padding: 20 }}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginBottom: 20,
        }}
        onPress={hideModal}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text style={{ fontSize: 25, fontWeight: "600" }}>Booking</Text>
      </TouchableOpacity>
      <Heading text={"Select Date 🗓️"} />
      <View style={styles.calendarContainer}>
        <CalendarPicker
          onDateChange={setSelectedDate}
          width={350}
          minDate={Date.now()}
          todayBackgroundColor="black"
          todayTextStyle={{ color: "#FFF" }}
          selectedDayColor="#8E3FFF"
          selectedDayTextColor="#FFF"
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Heading text={"Select Time Slot ⏲️"} />
        <FlatList
          data={timeList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => setSelectedTime(item.time)}
            >
              <Text
                style={[
                  selectedTime == item.time
                    ? styles.selectedTime
                    : styles.unselectedTime,
                ]}
              >
                {item.time}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View>
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Heading text={"Add Note 📝"} />
          <Text>(Optional)</Text>
          </View>
          <TextInput
          placeholder="Add Your suggestion or note here"
          numberOfLines={5}
          multiline={true}
          style={{
            borderWidth: 0.8, 
            borderRadius: 15,
            textAlignVertical: 'top',
            padding: 20,
            fontSize: 16,
            borderColor: '#8E3FFF'
          }}
          onChange={(text)=> setNote(text)}
          /> 
      </View>
      <View style={{marginTop: 15}}>
        <TouchableOpacity
        onPress={()=>createBooking()}
        >
          <Text style={styles.BookBtn}>Confirm & Book</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default BookingModal;

const styles = StyleSheet.create({
  calendarContainer: {
    padding: 20,
    backgroundColor: "#f2e3fa",
    borderRadius: 15,
  },

  selectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#8E3FFF",
    borderRadius: 99,
    elevation:2,
    paddingHorizontal: 18,
    backgroundColor: "#8E3FFF",
    color: "#FFF",
  },
  unselectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#8E3FFF",
    borderRadius: 99,
    paddingHorizontal: 18,
    color: "#8E3FFF",
  },

  BookBtn:{
    textAlign:'center',
    fontSize: 18, 
    backgroundColor: '#8E3FFF',
    color: 'white',
    padding: 14, 
    borderRadius: 99,
    elevation: 2
  }
});
