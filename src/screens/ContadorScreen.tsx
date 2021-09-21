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
            color="white"
            />
            <Button
            title="-1"
            onPress={ ()=>sumaYresta(-1) }
            color="white"
            />

        </View >
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 40,
        textAlign: "center",
        top: -15,
    }
})


