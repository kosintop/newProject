import React from 'react'
import {View, Image, Text} from 'react-native'

export default ({height, width, color, imageUrl, text})=>(
    <View style={{height:height, width:width, padding:10,flexDirection:'row'}}>
        <View style={{height:'100%',width:20, backgroundColor:color}}/>
        <View style={{flex:1}}>
            <Image style={{width:'100%', height:'80%'}} resizeMode='contain' source={{uri:imageUrl}}/>
            <Text>{text}</Text>
        </View>
    </View>
)