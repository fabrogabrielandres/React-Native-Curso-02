import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


interface Props {
    title?: string;
    onPress: () => void;
    position ?:  "left" | "right" ;
    tinte?:"blue"|"white"|"green"

}


export const Button = ({title,onPress, position="left",tinte="white"}: Props) => {

    return (
        <>
            <TouchableOpacity
                style={[styles.position,(position==="right")? styles.right : styles.left,]}
                onPress={onPress}

            >
                <View style={styles.button}>
                    <Text style={[styles.buttonText,(tinte==="green")&&styles.green,(tinte==="blue")&&styles.blue]}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
    )
}




const styles = StyleSheet.create({
    button: {
        backgroundColor: "orange",
        borderRadius: 100,
        height: 60,
        width: 60,
        justifyContent: 'center'
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
        right:0
    },
    white:{
        color:"white"
    },
    blue:{
        color:"blue"
    },
    green:{
        color:"green"
    }

})


