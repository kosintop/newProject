import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import RedBox from './components/RedBox';
import ColorBox from './components/ColorBox';
import Card from './components/Card';
import {StackNavigator} from 'react-navigation'
import Screen1 from './screens/screen1';

export default class App extends Component {
    render() {
        // return <View>
        //     <View style={{flexDirection:'row'}}>
        //         <View style={{width:100,height:100,backgroundColor:'red',padding:10}}>
        //             <View style={{flex:1,backgroundColor:'orange'}}/>
        //         </View>
        //         <View style={{width:100,height:100,backgroundColor:'blue',padding:10}}>
        //             <View style={{flex:1,backgroundColor:'lightblue'}}/>
        //         </View>
        //     </View>
        //     <View style={{flexDirection:'row'}}>
        //         <View style={{width:100,height:100,backgroundColor:'green',padding:10}}>
        //             <View style={{flex:1,backgroundColor:'yellow'}}/>
        //         </View>
        //         <View style={{width:100,height:100,backgroundColor:'violet',padding:10}}>
        //             <View style={{flex:1,backgroundColor:'green'}}/>
        //         </View>
        //     </View>
        // </View>

        // return <View style={{flex:1}}>
        //     <View style={{flex:1,flexDirection:'row',borderWidth:1,padding:10}}>
        //         <View style={{flex:1,borderWidth:1,padding:10}}>
        //             <View style={{flex:1,borderWidth:1}}>
        
        //             </View>
        //             <View style={{flex:3,borderWidth:1}}>

        //             </View>
        //         </View>
        //         <View style={{flex:1,borderWidth:1,padding:10}}>
        //             <View style={{flex:3,borderWidth:1}}>
            
        //             </View>
        //             <View style={{flex:1,borderWidth:1}}>

        //             </View>
        //         </View>
        //     </View>
        //     <View style={{flex:1,flexDirection:'row',borderWidth:1,padding:10}}>
        //         <View style={{flex:1,borderWidth:1}}>

        //         </View>
        //         <View style={{flex:3,borderWidth:1}}>

        //         </View>
        //         <View style={{flex:1,borderWidth:1}}>

        //         </View>
        //     </View>
        // </View>

        // return <View style={{flex:1, flexDirection:'row', alignContent:'center'}}>
        //         <View style={{flex:1, margin:20, alignSelf:'center',alignItems:'center'}}>
        //             <Image style={{width:100, height:100,}} source={require('./download.jpg')} resizeMode='cover'/>
        //             <Text style={{textAlign:'center'}}>A Cat</Text>
        //         </View>
        //         <View style={{flex:1, margin:20, alignSelf:'center',alignItems:'center'}}>
        //             <Image style={{width:100, height:100}} source={{uri:'https://s3.envato.com/files/223920975/Low%20Poly%20Colorful%20Background%20Preview.jpg'}} resizeMode='cover'/>
        //             <Text style={{textAlign:'center'}}>Abstract</Text>
        //         </View>
        //     </View>

        // return <View>
        //     <TextInput onChangeText={this.OnText} value={this.state.txt}/>
        //     <View style={{flexDirection:'row', width:'100%'}}>
        //         <TouchableOpacity style={{flex:1,backgroundColor:'red', padding:10}} onPress={this.OnClear}>
        //             <Text style={{textAlign:'center', color:'white'}}>Clear</Text>
        //         </TouchableOpacity>
        //         <TouchableOpacity style={{flex:1,backgroundColor:'blue', padding:10}} onPress={this.OnAlert}>
        //             <Text style={{textAlign:'center', color:'white'}}>Alert</Text>
        //         </TouchableOpacity>
        //     </View>
        // </View>

        // return <View>
        //     <ColorBox color={'red'}/>
        //     <ColorBox color={'blue'}/>
        //     <ColorBox color={'green'}/>
        //     <ColorBox color={'yellow'}/>
        //     <ColorBox color={'black'}/>
        // </View>

        // return <ScrollView>
        //         <Card width={500} height={500} color='blue' text='test1' imageUrl={'https://ae01.alicdn.com/kf/HTB1.HExQVXXXXa6XVXXq6xXFXXXD/framed-diy-oil-painting-by-numbers-Animal-Colorful-Cat-Hand-Painted-Creative-Picture-coloring-by-numbers.jpg_640x640.jpg'}/>
        //         <Card width={400} height={400} color='red' text='test2' imageUrl={'https://img00.deviantart.net/6972/i/2013/198/5/1/colorful_leopard_viii_by_megaossa-d5v62kb.jpg'}/>
        //         <Card width={300} height={300} color='green' text='test3' imageUrl={'https://cdn.pixabay.com/photo/2015/05/08/20/03/mosaic-758754_960_720.jpg'}/>
        //     </ScrollView>
        return <AppNavigator/>
    }

    state={
        txt:''
    }

    OnClear = ()=>{
        this.setState({txt:''})
    }

    OnText = (text)=>{
        console.log(text)
        this.setState({txt:text})
    }

    OnAlert = ()=>{
        alert(this.state.txt)
    }
}

const AppNavigator = StackNavigator({
    Screen1:{
        screen:Screen1
    },
    Screen2:{
        screen:Screen2
    },
    Screen3:{
        screen:Screen3
    }
})