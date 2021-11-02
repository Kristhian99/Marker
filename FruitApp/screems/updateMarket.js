import React,{useState} from 'react'
import { Text,Image,StyleSheet,View,TextInput,TouchableOpacity} from 'react-native'
import {updateAFruit} from '../api'

const updateMarket = ({route}) => {
    
    const kind_fruit=route.params.kind;


    const [fruit,setfruit] = useState( {
        dijon: 0,
        id: '',
        kind: kind_fruit,
        lila: 0,
        marsella: 0,
        niza: 0,
        paris: 0,
     
    })

    
    const handlefruit = (name,value) => {
        setfruit({...fruit,[name]:Number(value)})

    }

    const updatefruit = async () => {
        const data = await updateAFruit(fruit)
        console.log(data)
        alert("Operation successfully executed")
    }

    const picture =() =>{
        if(kind_fruit === 'APPLE')
            return <Image style={styles.apple} source={require('../pictures/apple.png')}/>
        if(kind_fruit === 'BANANA')
            return <Image style={styles.banana} source={require('../pictures/banana.png')}/>
        if(kind_fruit === 'ORANGE')
            return <Image style={styles.orange} source={require('../pictures/orange.png')}/>
        if(kind_fruit === 'CHERRY')
            return <Image style={styles.cherry} source={require('../pictures/cherry.png')}/>
        if(kind_fruit === 'STRAWBERRY')
            return <Image style={styles.strawberry} source={require('../pictures/strawberry.png')}/>
        }



    return (
        <View style={styles.container}>
            {picture()}
            <View style={styles.viewcontainer}>            
                <Text style={styles.input1}>Paris</Text>
                <TextInput style={styles.input1} placeholder="New Amount" placeholderTextColor='#ffffff' keyboardType="numeric"
                 onChangeText={(text)=>{ 
                                        let num = text.replace(".", '');
                                        if(isNaN(num)){
                                            alert('Please enter a valid amount')
                                        }else{
                                        handlefruit('paris', num)}  
                                        }}
                />
            </View>

            <View style={styles.viewcontainer}>            
                <Text style={styles.input1}>Niza</Text>
                <TextInput style={styles.input1} placeholder="New Amount" placeholderTextColor='#ffffff' keyboardType="numeric"
                onChangeText={(text)=> { 
                                        let num = text.replace(".", '');
                                        if(isNaN(num)){
                                            alert('Please enter a valid amount')
                                        }else{
                                        handlefruit('niza', num)}  
                                        }}
                 />
            </View>

            <View style={styles.viewcontainer}>            
                <Text style={styles.input1}>Lila</Text>
                <TextInput style={styles.input1} placeholder="New Amount" placeholderTextColor='#ffffff' keyboardType="numeric"
                onChangeText={(text)=> { 
                                        let num = text.replace(".", '');
                                        if(isNaN(num)){
                                            alert('Please enter a valid amount')
                                        }else{
                                        handlefruit('lila', num)}  
                                        }}
                />
            </View>


            <View style={styles.viewcontainer}>            
                <Text style={styles.input1}>Marsella</Text>
                <TextInput style={styles.input1} placeholder="New Amount" placeholderTextColor='#ffffff' keyboardType="numeric"
                onChangeText={(text)=> { 
                                        let num = text.replace(".", '');
                                        if(isNaN(num)){
                                            alert('Please enter a valid amount')
                                        }else{
                                        handlefruit('marsella', num)}  
                                        }}
                />
            </View>

            
            <View style={styles.viewcontainer}>            
                <Text style={styles.input1}>Dijon</Text>
                <TextInput style={styles.input1} placeholder="New Amount" placeholderTextColor='#ffffff' keyboardType="numeric"
                onChangeText={(text)=> { 
                                        let num = text.replace(".", '');
                                        if(isNaN(num)){
                                            alert('Please enter a valid amount')
                                        }else{
                                        handlefruit('dijon', num)}  
                                        }}
                />
            </View>
            <TouchableOpacity onPress={updatefruit}>
                <Text style={styles.botton}>       Update Marker</Text>
            </TouchableOpacity>

        </View>
    )

    
}

const styles = StyleSheet.create(
    {
    apple:{width:'30%', height:'15%',alignItems:'center',justifyContent: 'center',marginLeft:120},
    banana:{width:'45%', height:'15%',alignItems:'center',justifyContent: 'center',marginLeft:100},
    orange:{width:'38%', height:'15%',alignItems:'center',justifyContent: 'center',marginLeft:100},
    cherry:{width:'30%', height:'15%',alignItems:'center',justifyContent: 'center',marginLeft:130},
    strawberry:{width:'30%', height:'15%',alignItems:'center',justifyContent: 'center',marginLeft:130},
    input1:{ width:'30%',
            color:'#ffffff',
            backgroundColor:'#483D8B',
            fontSize:14,
            padding:10,
            borderRadius:15,
            marginTop:50,
        },
    container: {backgroundColor:'#222f3e',padding:20,flex:1},
    viewcontainer:{flexDirection:'row',justifyContent: 'space-between'},
    botton: {width:'75%',
    marginTop:35,
    backgroundColor:'#F08080',
    color:'#ffffff',
    paddingLeft:40,
    paddingRight:40,
    paddingBottom:15,
    paddingTop:12,
    borderRadius:12,
    marginLeft: 50,
    justifyContent: 'center'}
    
    }
)

export default updateMarket
