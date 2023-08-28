
import React from 'react';
import {Text, View, Image, Button} from 'react-native';



export default class App extends React.Component {

  Header = () => {
    return (
      <Text>Home | Sobre | Contato</Text>
    );
    
  }
  Body = () => {
    return (
      <Text>Conteudo do APP</Text>
    );
    
  }
  Footer = () => {
    return (
      <Text>Rodapé do meu APP</Text>
    );
    
  }

  render() {
    return (
      <View style={{marginTop:20}}>
        <this.Header></this.Header>
        <this.Body></this.Body>
        <this.Footer></this.Footer>
        <Botao></Botao>
      </View>
    );
  }

}

const Botao = () => {
  return(
    <Button title='Clique aqui'></Button>
  )
}