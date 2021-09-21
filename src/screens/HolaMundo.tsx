import React from "react";
import { View, Text } from "react-native";

export const HolaMundo = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 40 }}>hola mundo</Text>
    </View>
  );
};
