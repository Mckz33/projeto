
import React from 'react';
import {Text, View, Image} from 'react-native';



export default class App extends React.Component {

  render() {
    return (
      <View>
        <Text>Minha Imagem</Text>
        <Image style={{width:50, height:50}}
          source={{ uri: "https://picsum.photos/seed/696/3000/2000" }}
      />
      </View>
    );
  }

}