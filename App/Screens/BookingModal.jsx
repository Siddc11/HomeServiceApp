import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from 'react-native-calendar-picker';

const BookingModal = ({ hideModal }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const onDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <View style={{ padding: 20 }}>
            <TouchableOpacity
                style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}
                onPress={hideModal}
            >
                <Ionicons name="arrow-back" size={30} color="black" />
                <Text style={{ fontSize: 25, fontWeight: '600' }}>Booking</Text>
            </TouchableOpacity>

            <View style={styles.calendarContainer}>
                <CalendarPicker
                    onDateChange={onDateChange}
                    width={350}
                    minDate={Date.now()}
                    todayBackgroundColor='black'
                    todayTextStyle={{ color: '#FFF' }}
                    selectedDayColor='#8E3FFF'
                    selectedDayTextColor='#FFF'
                />
            </View>
        </View>
    );
}

export default BookingModal;

const styles = StyleSheet.create({
    calendarContainer: {
        padding: 20,
        backgroundColor: '#f2e3fa',
        borderRadius: 15
    }
});
