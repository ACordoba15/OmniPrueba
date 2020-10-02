import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackGeneral from "./Components/StackGeneral";
import TabGeneral from "./Components/EnviarDinero/TabGeneral";

export default function App() {
  // Poner navegación entre las ventanas
  return (
    <NavigationContainer>
      <StackGeneral />
    </NavigationContainer>
  );
}
