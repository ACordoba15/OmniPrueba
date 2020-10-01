//import libraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
  StatusBar,
} from "react-native";
import { Card } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import CardInfo from "./CardInfo";
import Footer from "./Footer";
import CardBotones from "./CardBotones";

// create a component
const Inicio = () => {
  const [dinero, setDinero] = useState(0.0); // Agregar máscaras

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="default"
        backgroundColor="gray"
        hidden={false}
        translucent={true}
      />
      <CardInfo />
      <CardBotones />
      <View style={styles.divider}></View>
      <Footer />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "lightgray",
  },
});

//make this component available to the app
export default Inicio;
