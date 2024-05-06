import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>PÁGINA Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'green', // Corrigido de 'borderBlockColor' para 'borderColor'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})
