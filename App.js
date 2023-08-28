
import React from 'react';
import {Text, View, Image, Button} from 'react-native';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';
import Botao from './components/Botao.js';



export default class App extends React.Component {

  render() {
    return(
      <View style={{marginTop:50}}>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
        <Botao></Botao>
      </View>
    );
  }

}