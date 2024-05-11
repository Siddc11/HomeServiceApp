import { View, Text, FlatList, Image , StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utils/GlobalApi';
import Heading from '../Components/Heading';

const Categories=()=> {

    const [categories, setCategories] = useState([]);
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
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={{uri:item?.icons?.url}}
                  style={{width:35, height:35}}
                />  
            </View>
            <Text style={{fontWeight:'500', marginTop:2}}>{item?.name}</Text>
        </View>
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