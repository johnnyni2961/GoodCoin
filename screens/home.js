import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, FlatList} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import ItemList from "../components/itemList";
import { Icon } from 'react-native-elements';
import { Value } from 'react-native-reanimated';

let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};
const tokenValues = [10,20,50,100,200,500,1000,2000,5000]
const categories = ['Food','Accommodation','Services','Supplies','General']

export default class Home extends React.Component  {
  state = {
    fontsLoaded: false,
    name: 'Ebtesam',
    token: 0,
    category:'Select a category',
    food:0,
    supplies:0,
    accommodation:0,
    general:0,
    services:0,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
   
  }


  

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      
      <View style={styles.home}>
    
   
      </View>
      <Text style={{position:'relative',fontSize:20,marginTop:'10%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaH'}}>Home                                              <Icon  name='heart' type='font-awesome' color='#fff'></Icon> <Icon onPress={()=>this.props.navigation.navigate('History')}  name='history' color='#fff'></Icon></Text>
      <Text style={{position:'relative',fontSize:30,marginTop:'5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Welcome,<Text style={{fontFamily:'FuturaH', color:'#c0a188'}}> {this.state.name}</Text></Text>
      <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL', overflow:'scroll'}}>Food:${this.state.food}      Accommodation:${this.state.accommodation}      Services:${this.state.services}           Supplies:${this.state.supplies}      General:${this.state.general}</Text>
      <Text style={{position:'relative',fontSize:20,marginTop:'5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Select a category to help a person in need</Text>
      <FlatList style={{height:10, marginBottom:10}}
                horizontal
                data={categories}
                renderItem={({ item }) =>  <Text style={styles.categories} onPress={()=>this.setState({category:item})}>{item}</Text>
                    
                    
                }
            />
       <Text style={{position:'relative',fontSize:20,marginTop:'2.5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Select token value</Text>
      
       <FlatList style={{height:10, marginBottom:10}}
                horizontal
                data={tokenValues}
                renderItem={({ item }) =>  <Text style={styles.token} onPress={()=>this.setState({token:item})}>{item}</Text>
                    
                    
                }
            />
            <View style={{height:200, elevation:1, borderRadius:20, backgroundColor:'#0A0A0A', borderColor:'#c0a188', borderWidth:1, marginBottom:'2.5%'}}>
            <ScrollView>
     <Text style={{position:'relative',fontSize:20,marginTop:'5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaH'}}>Goodcoin Selection Summary</Text>
              <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Categories{"\n"}----------------------------------------------</Text>
    <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL'}}>{this.state.category}</Text>
    <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Amount{"\n"}----------------------------------------------</Text>
    <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginBottom:'10%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL'}}>${this.state.token}</Text>
    </ScrollView></View>
    <Text style={{position:'relative',fontSize:20,textAlign:'center', color:'#000', fontFamily:'FuturaH', marginBottom:'5%', backgroundColor:'#FFF', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:5,borderColor:'#c0a188', borderWidth:1,}} onPress={()=>this.props.navigation.navigate('Token')} >Generate Token</Text>
    
     
      
      
    </View>
    );
    }
    else {
    return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#000'
  },
  left:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    left:'5%',
    position:'absolute',
  },
  categories:{
    fontFamily:'FuturaH', 
    fontSize:15,
    backgroundColor:'#c0a188', 
    borderRadius:10,
    textAlign:'center',
    textAlignVertical:'center',
    width:150,
    height:100,
    marginRight:10,
  },
  token:{
    fontFamily:'FuturaH', 
    fontSize:20,
    backgroundColor:'#c0a188', 
    borderRadius:10,
    textAlign:'center',
    textAlignVertical:'center',
    width:100,
    height:100,
    marginRight:10,

  },
  right:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    right:'5%',
    position:'absolute'
  },
  middle:{
    height:'60%',
    width:'60%',
    marginTop:'5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
  },
 

});