import React from "react";
import { Text, View, StyleSheet} from "react-native";

const Header = () => {
    return(
        <View style={styles.view}>
            <Text style={styles.textStyle}>App Música</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    view:{
        backgroundColor:'blue',
        padding:20,
        width:'100%'
    },
    textStyle: {
        textAlign:'center',
        fontSize:30,
        color:'white'
    }
});

export default Header;