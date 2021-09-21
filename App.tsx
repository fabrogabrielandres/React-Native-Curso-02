import React from "react";
import { View } from "react-native";
import { ContadorScreen } from "./src/screens/ContadorScreen";
// import { HolaMundo } from "./src/screens/HolaMundo";


export const App = () => {
  return (
    <View>
      {/* <HolaMundo /> */}
      <ContadorScreen/>
    </View>
  );
};

export default App;
