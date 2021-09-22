import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'


interface Props {
    title?: string;
    onPress: () => void;
    position?: "left" | "right";
    tinte?: "blue" | "white" | "green"

}


export const Button = ({ title, onPress, position = "left", tinte = "white" }: Props) => {

    return (
        <View
            style={[styles.position, (position === "right") ? styles.right : styles.left,]}
        >
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple("red", false,30)}
            >
                <View style={styles.button}>
                    <Text style={[styles.buttonText, (tinte === "green") && styles.green, (tinte === "blue") && styles.blue]}>
                        {title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}




const styles = StyleSheet.create({
    button: {
        backgroundColor: "#5856D6",
        borderRadius: 100,
        height: 60,
        width: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        textShadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8
    },

    buttonText: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",

    },
    position: {
        position: "absolute",
        bottom: 0,
    },
    left: {
        left: 0
    },
    right: {
        right: 0
    },
    white: {
        color: "white"
    },
    blue: {
        color: "blue"
    },
    green: {
        color: "green"
    }

})


