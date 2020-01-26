import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text,ImageBackground,Image}
from 'react-native';
export default class App extends Component{
  render(){
    return(
      <View style={styles.MainContainer}>
          />
        <ImageBackground
        source={require('./assets/jpg.jpg')}
        style = {styles.imageStyle}> 
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  imageStyle:{
    width:400,
    height:650,
    justifyContent:'flex-end',
    alignItems:'center'
  }
});