
import React from 'react';
import {Text, View, Image, Button, ScrollView} from 'react-native';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';



export default class App extends React.Component {

  render() {
    return(
      <ScrollView style={{marginTop:50, flex:1}}>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </ScrollView>
    );
  }

}