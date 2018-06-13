import React, {Component} from 'react'
import {Text} from 'react-native'

export default class Screen2 extends Component{
    render(){
        return <Text>{this.props.navigation.state.params.myString  || '-'}</Text>
    }
} 