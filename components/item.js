import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Item({ route,txid,date,token, food, accomodation, services, supplies}) {
    const navigation = useNavigation();
    return (
        <View style={{ elevation:1, borderRadius:20, backgroundColor:'#0A0A0A', borderColor:'#c0a188', borderWidth:1, marginBottom:'2.5%'}}>

 <Text style={{position:'relative',fontSize:20,marginTop:'5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaH'}}>Token ID #{txid}                    <Text style={{color:'#c0a188', fontFamily:'FuturaL'}}>{date}</Text></Text>
          <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Categories{"\n"}----------------------------------------------</Text>
{food && <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL'}}>Food</Text>}
{accomodation && <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL'}}>Accomodation</Text>}
{services && <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL'}}>Services</Text>}
{supplies && <Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL'}}>Supplies</Text>}
<Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginLeft:'5%', textAlign:'left', color:'#fff', fontFamily:'FuturaL'}}>Amount{"\n"}----------------------------------------------</Text>
<Text style={{position:'relative',fontSize:20,marginTop:'1.5%',marginBottom:'10%',marginLeft:'5%', textAlign:'left', color:'#c0a188', fontFamily:'FuturaL'}}>${token}</Text>
</View>
)}



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