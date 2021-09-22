import React, { useState } from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import { Button } from '../components/Button';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(0)

    const sumaYresta = (n: number): void => {
        setContador(contador + n)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {contador}
            </Text>

            <Button
            title="+1"
            onPress={ ()=>sumaYresta(1) }
            position="left"
            tinte="green"
            />
            <Button
            title="-1"
            onPress={ ()=>sumaYresta(-1) }
            position="right"
            tinte="white"
           />

        </View >
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        borderRadius:100
    },
    title: {
        fontSize: 40,
        textAlign: "center",
        top: -15,
    }
})


