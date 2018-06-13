import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default class Screen1 extends Component{
    onPress = ()=>{
        this.props.navigation.navigate('Screen2',{myString:'123'})
    }

    render(){
        return <View>
            <TouchableOpacity style={{backgroundColor:'red',padding:10}} onPress={this.onPress}>
                   <Text>Screen 1</Text>
            </TouchableOpacity>
        </View>
    }
} 