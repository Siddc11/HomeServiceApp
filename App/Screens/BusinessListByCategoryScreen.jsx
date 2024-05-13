import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native'; 
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';

const BusinessListByCategoryScreen = () => {
    const navigation = useNavigation(); 
    const param = useRoute().params;
    
    const [businessList, setBusinessList] = useState([]);
    useEffect(() => {
        param&&getBusinessByCategory();
    }, [param]);

    const getBusinessByCategory=()=>{
        GlobalApi.getBusinessListByCategory(param.category).then(resp=>{
            setBusinessList(resp.businessLists);
        })
    }

    return (
        <View style={{ padding: 20, paddingTop: 30 }}>
            <TouchableOpacity 
                style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }} 
                onPress={() => navigation.goBack()} 
            >
                <Ionicons name="arrow-back" size={30} color="black" />
                <Text style={{ fontSize: 25, fontWeight: '600' }}>{param?.category}</Text>
            </TouchableOpacity>

            <FlatList 
              data={businessList}
              renderItem={({item, index})=>(
                <BusinessListItem business={item}/>
              )}
            />
        </View>
    );
};

export default BusinessListByCategoryScreen;
