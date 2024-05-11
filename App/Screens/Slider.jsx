import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../Utils/GlobalApi";
import Heading from "../Components/Heading";

export default function Slider() {
  const [slider, setSlider] = useState();
  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = () => {
    GlobalApi.getSlider().then((resp) => {
      console.log("resp", resp.sliders);
      setSlider(resp?.sliders);
    });
  };
  return (
    <View>
      <Heading text={'Offers For You🎉'}/>
      <FlatList
       horizontal={true} showsHorizontalScrollIndicator={false}
        data={slider}
        renderItem={({ item, index }) => (
          <View style={{marginRight: 10}}>
            <Image
              source={{ uri: item?.image[0]?.url }}
              style={styles.SliderImage}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  SliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
  },
});
