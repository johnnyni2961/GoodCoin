import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};

export default class Splash extends React.Component  {
  state = {
    fontsLoaded: false,
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
      <Image source={require('../assets/logo.png')} style={styles.header}></Image>
     
      
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#000', fontFamily:'FuturaH', marginTop:'25%', backgroundColor:'#c0a188', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('TLogin')}>LOGIN</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#364f6b', fontFamily:'FuturaH', marginTop:'5%', backgroundColor:'#fff', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('TReg')}>REGISTER</Text>
      <Text style={{position:'relative',fontSize:15,margin:'auto', textAlign:'center', color:'#c0a188', fontFamily:'FuturaL', marginTop:'5%',alignSelf:'center'}} onPress={()=>this.props.navigation.navigate('Login')}>Would you like to donate? Login here</Text>
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
  header:{
    height:'30%',
    width:'70%',
    marginTop:'20%',
    resizeMode:'contain',
    alignSelf:'center'
  },
  
});