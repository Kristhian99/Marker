import React from 'react';
import {Text,TouchableOpacity} from "react-native"
import Transaction from './screems/Transaction'
import HomeScreen from './screems/HomeScream'
import Login from './screems/login'
import Login1 from './screems/login1';
import updateMarket from './screems/updateMarket'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()
const App = ()=>{
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
        options={({navigation})=>(
          {title:'Data Fruit :)',
            headerStyle:{backgroundColor: '#222f3e'},
           headerTitleStyle:{color: '#ffffff'},
           headerTintColor:'#ffffff',
           headerRight:()=>(
             <TouchableOpacity onPress={()=>navigation.navigate("login")}>
               <Text style={{color:'#ffffff',marginRight:20,backgroundColor:'#8B0000'
               ,paddingRight:20,paddingLeft:20,paddingBottom:7,paddingTop:7}}>Transaction</Text>
             </TouchableOpacity>
           )
          })
        }/>

        <Stack.Screen name="Transaction" component={Transaction}
        options={({navigation})=>(
          {title:'Transfer Fruits ',
            headerStyle:{backgroundColor: '#222f3e'},
            headerTintColor:'#ffffff',
           headerTitleStyle:{color: '#ffffff' ,justifyContent: 'center',alignItems:'center'},
          })}/>


        <Stack.Screen name="login" component={Login }options={({navigation})=>(
          {title:'User Authentication :)',
            headerStyle:{backgroundColor: '#222f3e'},
           headerTitleStyle:{color: '#ffffff' ,justifyContent: 'center',alignItems:'center'},
           headerTintColor:'#ffffff',
           })}/>



          <Stack.Screen name="login1" component={Login1 }options={({navigation})=>(
          {title:'User Authentication :)',
            headerStyle:{backgroundColor: '#222f3e'},
           headerTitleStyle:{color: '#ffffff' ,justifyContent: 'center',alignItems:'center'},
           headerTintColor:'#ffffff',
          })}/>

          <Stack.Screen name="Update" component={updateMarket }options={({navigation})=>(
          {title:'Update Marker :)',
            headerStyle:{backgroundColor: '#222f3e'},
           headerTitleStyle:{color: '#ffffff' ,justifyContent: 'center',alignItems:'center'},
           headerTintColor:'#ffffff',
          })}/>



      </Stack.Navigator>


    </NavigationContainer>
  )
}
export default App;