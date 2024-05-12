import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Heading from '../Components/Heading';
import GlobalApi from '../Utils/GlobalApi';
import BusinessListItemSmall from './BusinessListItemSmall';

const BusinessList = () => {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getBusinessList();
  }, []);

  const getBusinessList = () => {
    GlobalApi.getBusinessList().then(resp => {
      if (resp && resp.businessLists) {
        setBusinessList(resp.businessLists);
      }
    }).catch(error => {
      console.error("Error fetching business list data:", error);
    });
  };

  return (
    <View style={{ marginTop: 15 }}>
      <Heading text={'Nearby Services'} />
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
        data={businessList}
        renderItem={({ item }) => (
          <View style={{marginRight:10}}>
            <BusinessListItemSmall business={item}/>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()} 
      />
    </View>
  );
};

export default BusinessList;
