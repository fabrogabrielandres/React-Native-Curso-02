import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


interface Props {
    title?: string;
    onPress: () => void;
    color?: string;

}


export const Button = ({title,onPress}: Props) => {

    return (
        <>
            <TouchableOpacity
                style={styles.buttonPositionRight}
                onPress={onPress}

            >
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}




const styles = StyleSheet.create({
    button: {
        backgroundColor: "#5856D6",
        borderRadius: 100,
        height: 60,
        width: 60,
        justifyContent: 'center'
    },

    buttonText: {
        alignSelf: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonPositionLeft: {
        position: "absolute",
        bottom: 0,
        left: 0
    },
    buttonPositionRight: {
        position: "absolute",
        bottom: 0,
        right: 0
    }
})



//comentario