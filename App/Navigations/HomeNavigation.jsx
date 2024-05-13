import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen'
import BusinessListByCategoryScreen from '../Screens/BusinessListByCategoryScreen'


const Stack = createStackNavigator();
const HomeNavigation=()=> {
  return (
   <Stack.Navigator screenOptions={
    {
        headerShown: false
    }
   }
   >
    <Stack.Screen name='Home' component={HomeScreen}/>
    <Stack.Screen name='Business-List' component={BusinessListByCategoryScreen}/>
   </Stack.Navigator>
  )
}

export default HomeNavigation;