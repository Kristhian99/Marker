import React, {useState} from 'react'
import {StyleSheet, TextInput ,TouchableOpacity,Text} from 'react-native'
import {userRequest} from '../api'
import Layout from '../componet/layout'

const Login1 = ({navigation,route}) => {
    
    const [log,setlog] = useState( {
        email: '',
        password: ''
    })

    const kind =route.params.kind

    const handleLogin =(name,value)=>setlog({...log,[name]: value})

    const reponselogin= async ()=>{
        const a =await userRequest(log)
        console.log(a.email);
        if(a.state==='ADMIN'){
        navigation.navigate("Update",{kind: kind})
        }
        if(a.email===''){
            alert('You dont exist')
        }
        else{
            if(a.state==='USER'&&a.password===''){
                alert('You dont have permissions')
            }
            else{
                if(a.password==='1'){
                alert('Wrong Password')
                }
            }
        }

    }

    return (
        <Layout>
            <TextInput style={style.input1} placeholder="email" placeholderTextColor='#ffffff'
            onChangeText={(text)=> handleLogin('email', text)}
            />
            
            <TextInput style={style.input} placeholder="password" placeholderTextColor='#ffffff'
            onChangeText={(text)=> handleLogin('password', text)}
            />
            <TouchableOpacity onPress={reponselogin}>
                <Text style={style.botton}>Sign in</Text>
            </TouchableOpacity>
        </Layout>
    )
}

const style= StyleSheet.create({
    input1:{ width:'60%',
            color:'#ffffff',
            backgroundColor:'#483D8B',
            fontSize:14,
            padding:10,
            borderRadius:15,
            marginTop:100,
            justifyContent: 'center'},
    input:{ width:'60%',
            color:'#ffffff',
            backgroundColor:'#483D8B',
            fontSize:14,
            padding:10,
            borderRadius:15,
            marginTop:30,
            justifyContent: 'center'},
    botton:{
        width:'75%',
        marginTop:35,
        backgroundColor:'#F08080',
        color:'#ffffff',
        paddingLeft:40,
        paddingRight:40,
        paddingBottom:15,
        paddingTop:12,
        borderRadius:12
        
    }
})



export default Login1

