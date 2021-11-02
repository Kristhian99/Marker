import React ,{useState,useEffect}from 'react'
import {getFruits} from '../api'
import {  View,FlatList,RefreshControl} from 'react-native'
import Fruit from './Fruit'


const FruitList = () => {

    const [refreshing,setrefreshing] =useState(false)
    const [fruits,setFruist]=useState([])

    const loadFruits = async () => {
        const data = await getFruits()
        setFruist(data)
    }

    useEffect( ()=>{
        loadFruits()
    }, []) 

    
    const renderItem= ({item})=>{
        return (
            <View>
             <Fruit fruit={item}/> 
             </View>
             )
    };

    const onRefresh = React.useCallback(async () => {
        setrefreshing(true);
        await loadFruits();
        setrefreshing(false);
    })

    

    return (
                     
            <FlatList style={{width:'100%'}}
            data={fruits}
            keyExtractor={(item) =>item.id}
            renderItem={renderItem}
            refreshControl={
            <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}/>}/> 

    )
}

export default FruitList
