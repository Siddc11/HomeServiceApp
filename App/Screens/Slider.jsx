import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utils/GlobalApi'

export default function Slider() {
    
    const [slider, setSlider] = useState();
    useEffect(()=>{
     getSlider();
    },[])

    const getSlider =()=>{
        GlobalApi.getSlider().then(resp=>{
            console.log("resp", resp.sliders);
            setSlider(resp?.sliders)
        })
    }
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}