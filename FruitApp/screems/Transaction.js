import React,{useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import { Text,Image,StyleSheet,View,TextInput,TouchableOpacity} from 'react-native'
import {updateACity} from '../api'


const Transaction = () => {

    const picture =() =>{
        if(selectedValue.kind === 'APPLE')
            return <Image style={styles.apple} source={require('../pictures/apple.png')}/>
        if(selectedValue.kind === 'BANANA')
            return <Image style={styles.banana} source={require('../pictures/banana.png')}/>
        if(selectedValue.kind === 'ORANGE')
            return <Image style={styles.orange} source={require('../pictures/orange.png')}/>
        if(selectedValue.kind === 'CHERRY')
            return <Image style={styles.cherry} source={require('../pictures/cherry.png')}/>
        if(selectedValue.kind === 'STRAWBERRY')
            return <Image style={styles.strawberry} source={require('../pictures/strawberry.png')}/>
        }

    const [selectedValue, setSelectedValue] = useState({
        kind: 'APPLE',
        from: 'paris', 
        to: 'niza', 
    });

    const[number,setNumber]=useState(0);

    const handleRequest = (name,value) => {
        setSelectedValue({...selectedValue,[name]:value})

    }
    
    const handlernumber = (value) => {
        setNumber(Number(value))
        console.log(selectedValue)
    }

    const update= async ()=>{
        const a =await updateACity(selectedValue,number)
        console.log(a.paris);
        if(a.paris>0){
            alert("Operation successfully executed")
        }
        else{
            if(a.paris===0){
                alert("There is a problem with the operation")
            }
            else{
                alert("There are not enough fruits for the operation")
            }
        }
    }

    

    return (

        <View style={styles.container}>
             {picture()}
            <Picker
                selectedValue={selectedValue.kind}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>  handleRequest('kind',itemValue)}
            >
            <Picker.Item  label="APPLE" value="APPLE" />
            <Picker.Item  label="BANANA" value="BANANA" />
            <Picker.Item  label="ORANGE" value="ORANGE" />            
            <Picker.Item  label="CHERRY" value="CHERRY" />
            <Picker.Item  label="STRAWBERRY" value="STRAWBERRY" />

            </Picker>

            <View style={styles.viewcontainer}>
            <Text style={{color:'#ffffff',marginTop:100,fontSize:17}}>   FROM</Text>
            <TextInput style={styles.input1} placeholder="Amount" placeholderTextColor='#ffffff' keyboardType="numeric"
                onChangeText={(text)=> { 
                                        let num = text.replace(".", '');
                                        if(isNaN(num)){
                                            alert('Please enter a valid amount')
                                        }else{
                                        handlernumber(num)}  
                                        }}
            />
            <Text style={{color:'#ffffff',marginTop:100,fontSize:17}} >TO    </Text>
            </View>
            <View style={styles.viewcontainer}>
                <Picker
                     selectedValue={selectedValue.from}
                    style={styles.picker2}
                    onValueChange={(itemValue, itemIndex) => handleRequest('from',itemValue)}
                >
                    <Picker.Item  label="PARIS" value="paris" />
                    <Picker.Item  label="NIZA" value="niza" />
                    <Picker.Item  label="MARSELLA" value="marsella" />            
                    <Picker.Item  label="DIJON" value="dijon" />
                    <Picker.Item  label="LILA" value="lila" />

                </Picker>
               
                <Picker
                    selectedValue={selectedValue.to}
                    style={styles.picker2}
                    onValueChange={(itemValue, itemIndex) =>  handleRequest('to',itemValue)}
                >
                    <Picker.Item  label="NIZA" value="niza" />
                    <Picker.Item  label="PARIS" value="paris" />
                    <Picker.Item  label="MARSELLA" value="marsella" />            
                    <Picker.Item  label="DIJON" value="dijon" />
                    <Picker.Item  label="LILA" value="lila" />

                </Picker>

            </View>
        
            <Text style={{color:'#ffffff',marginTop:80,fontSize:17,textAlign: 'center',fontStyle: 'italic'}}
            >YOU ARE GONNA SEND {number} {selectedValue.kind}S FROM {selectedValue.from.toLocaleUpperCase()} TO {selectedValue.to.toLocaleUpperCase()}</Text>
            
            <TouchableOpacity onPress={update}>
                <Text style={styles.botton}>SEND</Text>
            </TouchableOpacity>

        </View>
    )


}

const styles= StyleSheet.create({
    container: {backgroundColor:'#222f3e',padding:20,flex:1},
    picker:{ height: 50, width: 200 ,backgroundColor:'#4682B4',color:'#ffffff',alignItems:'center',
    marginTop:15,marginLeft:80,padding:5,   borderWidth: 5,borderColor:'red',textAlign: 'center'},
    input1:{ width:'30%',
            color:'#ffffff',
            backgroundColor:'#FF6347',
            fontSize:14,
            padding:8,
            borderRadius:15,
            marginTop:80,
            textAlign: 'center'},

    picker2:{ height: 50, width: 120 ,backgroundColor:'#0000CD',color:'#ffffff',alignItems:'center',
    marginTop:30,marginLeft:20,padding:5,   borderWidth: 5,borderColor:'red'},
    
    apple:{width:'30%', height:'15%',alignItems:'center',justifyContent: 'center',marginLeft:120},
    banana:{width:'45%', height:'15%',alignItems:'center',justifyContent: 'center',marginLeft:100},
    orange:{width:'38%', height:'15%',alignItems:'center',justifyContent: 'center',marginLeft:100},
    cherry:{width:'30%', height:'15%',alignItems:'center',justifyContent: 'center',marginLeft:130},
    strawberry:{width:'30%', height:'15%',alignItems:'center',justifyContent: 'center',marginLeft:130},
    viewcontainer:{flexDirection:'row',justifyContent: 'space-between'},
    botton:{textAlign: 'center',
        width:'75%',
        marginTop:70,
        marginLeft:50,
        backgroundColor:'#F08080',
        color:'#ffffff',
        paddingLeft:40,
        paddingRight:40,
        paddingBottom:15,
        paddingTop:12,
        borderRadius:12}
})

export default Transaction
