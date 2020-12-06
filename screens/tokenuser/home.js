import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, FlatList} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import ItemList from "../../components/itemList";
import { Icon } from 'react-native-elements';
import { Value } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';

let customFonts  = {
  'FuturaH': require('../../assets/fonts/futurah.ttf'),
  'FuturaL': require('../../assets/fonts/futural.ttf'),
};
const tokenValues = [10,20,50,100,200,500,1000,2000,5000]

export default class THome extends React.Component  {
  state = {
    fontsLoaded: false,
    name: 'Ebtesam',
    food: false,
    accomodation:false,
    services: false,
    supplies: false,
    general:false,
    token: 0,
    reason: '',
    details: '',
    contact: '',
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
      <Text style={{position:'relative',fontSize:20,marginTop:'10%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaH'}}>Submit your Request                          <Icon  name='wallet' type='ant-design' color='#fff' onPress={()=>this.props.navigation.navigate('Wallet')}></Icon> <Icon onPress={()=>this.props.navigation.navigate('THistory')}  name='history' color='#fff'></Icon></Text>
    <ScrollView>
      <Text style={{position:'relative',fontSize:20,marginTop:'5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Select categories of token you need:</Text>
    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
    <Text style={styles.categories} onPress={()=>{this.setState({food:!this.state.food})}}>Food {"\n"} {this.state.food && <Icon name='check-circle' size={30}></Icon>} </Text> 
        <Text style={styles.categories} onPress={()=>{this.setState({accomodation:!this.state.accomodation})}}>Accomodation {this.state.accomodation && <Icon name='check-circle' size={30}></Icon>}</Text>
        <Text style={styles.categories} onPress={()=>{this.setState({services:!this.state.services})}}>Services {"\n"} {this.state.services && <Icon name='check-circle' size={30}></Icon>}</Text>
        <Text style={styles.categories} onPress={()=>{this.setState({supplies:!this.state.supplies})}}>Supplies {"\n"} {this.state.supplies && <Icon name='check-circle' size={30}></Icon>}</Text>
       </View>
       <Text style={{position:'relative',fontSize:20,marginTop:'5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Enter token value</Text>
      
       <TextInput placeholder={"$0"} id={"value"} style={{fontFamily:'FuturaH', fontSize:30, color:'#c0a188', borderWidth:1, borderColor:'#c0a188', borderRadius:10, paddingHorizontal:'5%', width:'50%', marginVertical:'2.5%', marginHorizontal:'2.5%'}} onChangeText={(value)=>this.setState({token:value})}></TextInput>
       <Text style={{position:'relative',fontSize:20,marginTop:'2.5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Tell us how you will be using these tokens</Text>
       <TextInput placeholder={"$0"} numberOfLines={5} multiline id={"reason"} style={{fontFamily:'FuturaH', fontSize:30, color:'#c0a188', borderWidth:1, borderColor:'#c0a188', borderRadius:10, paddingHorizontal:'5%', width:'95%', marginVertical:'2.5%', marginHorizontal:'2.5%'}} onChangeText={(reason)=>this.setState({reason:reason})}></TextInput>
       <Text style={{position:'relative',fontSize:20,marginTop:'2.5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Is there anything else you'd like us to know?</Text>
       <TextInput placeholder={"$0"} numberOfLines={5} multiline id={"details"} style={{fontFamily:'FuturaH', fontSize:30, color:'#c0a188', borderWidth:1, borderColor:'#c0a188', borderRadius:10, paddingHorizontal:'5%', width:'95%', marginVertical:'2.5%', marginHorizontal:'2.5%'}} onChangeText={(details)=>this.setState({details:details})}></TextInput>
       <Text style={{position:'relative',fontSize:20,marginTop:'2.5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Please enter your contact information</Text>
       <TextInput placeholder={"$0"} numberOfLines={5} multiline id={"contact"} style={{fontFamily:'FuturaH', fontSize:30, color:'#c0a188', borderWidth:1, borderColor:'#c0a188', borderRadius:10, paddingHorizontal:'5%', width:'95%', marginVertical:'2.5%', marginHorizontal:'2.5%'}} onChangeText={(contact)=>this.setState({contact:contact})}></TextInput>
      </ScrollView>      
    <Text style={{position:'relative',fontSize:20,textAlign:'center', color:'#000', fontFamily:'FuturaH', marginBottom:'5%', backgroundColor:'#FFF', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:5,borderColor:'#c0a188', borderWidth:1,}} onPress={()=>this.props.navigation.navigate('UToken')} >Submit Request</Text>
    
     
      
      
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