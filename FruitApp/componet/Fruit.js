import React from 'react'
import {  View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

const Fruit = ({fruit}) => {
    
    const navigation = useNavigation()

    const kind =() =>{
        if(fruit.kind === 'APPLE')
            return <Text style={styles.appletext}>{fruit.kind}S IN STOCK</Text>
        if(fruit.kind === 'BANANA')
            return <Text style={styles.bananatext}>{fruit.kind}S IN STOCK</Text>
        if(fruit.kind === 'ORANGE')
            return <Text style={styles.orangetext}>{fruit.kind}S IN STOCK</Text>
        if(fruit.kind === 'CHERRY')
            return <Text style={styles.cherrytext}>{fruit.kind}S IN STOCK</Text>
        if(fruit.kind === 'STRAWBERRY')
            return <Text style={styles.strawtext}>{fruit.kind}S IN STOCK</Text>
        }




    return (
        <TouchableOpacity onPress= { ()=> navigation.navigate("login1",{kind: fruit.kind})}>
        <View style={styles.container}>
            {kind()}
            <Text style={styles.itemtext}> Paris={fruit.paris}     --       Niza={fruit.niza}     --       Lila={fruit.lila} </Text>
            <Text style={styles.itemtext}>           Marsella={fruit.marsella}    --     Dijon={fruit.dijon}</Text>
        </View>
        </TouchableOpacity>
        

    );
};

const styles = StyleSheet.create({
    imageContainer: {width: '5%', height: '15%'},
    itemtext:{color:'#ffffff'},
    appletext:{color:'#00FF7F',justifyContent: 'center',alignItems:'center',marginLeft:100},
    bananatext:{color:'#FFD700',justifyContent: 'center',alignItems:'center',marginLeft:100},
    orangetext:{color:'#FFA07A',justifyContent: 'center',alignItems:'center',marginLeft:100},
    cherrytext:{color:'#8B0000',justifyContent: 'center',alignItems:'center',marginLeft:100},
    strawtext:{color:'#FF6347',justifyContent: 'center',alignItems:'center',marginLeft:100},
    container: {backgroundColor:"#333333",padding:10,marginVertical:30,borderRadius:12}
})

export default Fruit;
