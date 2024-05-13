import { View, Text, FlatList, Image , StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utils/GlobalApi';
import Heading from '../Components/Heading';
import { useNavigation } from '@react-navigation/native';

const Categories=()=> {

    const [categories, setCategories] = useState([]);

    const navigation = useNavigation();

    useEffect(()=>{
        getCategories();
    },[])
 
    const getCategories=()=>{
        GlobalApi.getCategory().then(resp=>{
            setCategories(resp?.categories);
        })
    }

  return (
    <View style={{marginTop:15}}>
     <Heading text={'Categories'} isViewAll={false}/>

     <FlatList
     numColumns={4}
     data={categories}
     renderItem={({item, index})=>{
        return(  
        <TouchableOpacity style={styles.container}
        onPress={()=>navigation.push('Business-List', {
            category: item.name
        })}
        >
            <View style={styles.iconContainer}>
                <Image source={{uri:item?.icons?.url}}
                  style={{width:35, height:35}}
                />  
            </View>
            <Text style={{fontWeight:'500', marginTop:2, fontSize: 12}}>{item?.name}</Text>
        </TouchableOpacity>
        );
     }
    }
     />
    </View>
  )
}
export default Categories;

const styles = StyleSheet.create({
    iconContainer:{
        backgroundColor: '#EDEDED',
        padding: 15, 
        borderRadius: 99
    },
    container:{
        flex: 1,
        alignItems: 'center'
    }
})