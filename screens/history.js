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

export default class History extends React.Component  {
  state = {
    fontsLoaded: false,
    name: 'Ebtesam',
    food: false,
    accomodation:false,
    services: false,
    supplies: false,
    token: 0,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
   
  }

  
  getData() {
    return  [
    {
      
    txid:"1234",
    date:"12/06/2020", 
    token:"100",
    food: false,
    accomodation:true,
    services: false,
    supplies: false,
  },
  {
      
    txid:"1234",
    date:"12/06/2020", 
    token:"100",
    food: true,
    accomodation:false,
    services: false,
    supplies: false,
  },{
      
    txid:"1234",
    date:"12/06/2020", 
    token:"100",
    food: true,
    accomodation:true,
    services: false,
    supplies: false,
  },{
      
    txid:"1234",
    date:"12/06/2020", 
    token:"100",
    food: false,
    accomodation:true,
    services: true,
    supplies: true,
  },
  ]
  }
  

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      
      <View style={styles.home}>
    
   
      </View>
      <Text style={{position:'relative',fontSize:20,marginTop:'10%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaH', marginBottom:'10%'}}>Token History                                   <Icon  name='heart' type='font-awesome' color='#fff'></Icon> <Icon onPress={()=>this.props.navigation.navigate('Home')}  name='home' color='#fff'></Icon></Text>
      <ScrollView>
      <ItemList itemList={this.getData()}/>
      </ScrollView>
          
    
    
     
      
      
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
    paddingVertical:'5%', 
    paddingHorizontal:'10%',
    backgroundColor:'#c0a188', 
    borderRadius:10,
    textAlign:'center',
    textAlignVertical:'center',
    width:'46.5%',
    marginHorizontal:'1.5%',
    marginVertical:'1.5%',
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