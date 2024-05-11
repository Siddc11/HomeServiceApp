import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../Utils/GlobalApi";
import Heading from "../Components/Heading";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategories(resp?.categories);
    });
  };
  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Categories"} isViewAll={true} />

      <FlatList
        data={categories}
        renderItem={({ item, index }) => (
          <View>
            <View>
              <Image
                source={{ uri: item?.icon?.url }}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Categories;
