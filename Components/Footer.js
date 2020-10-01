//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Movilidad</Text>
      <Text>Esta sección se encuentra en construcción</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

//make this component available to the app
export default Footer;
