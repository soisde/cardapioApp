import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Cardapio() {
    return(
        <View style={StyleSheet.container}>
            <Text style={style.Text}>PAGINA Notificação</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBlockColor: 'green',

    },
     text:{
        fontSize: 25,
        fontWeight: 'bold'
     }
})