//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CuentaDestino from "./CuentaDestino";
import CuentaOrigen from "./CuentaOrigen";
import MontoEnviar from "./MontoEnviar";

// create a component
/* Card cuenta origen 
    Card cuenta destino 
    Monto a enviar 
    Confirmar 
    Enviar foto */
const EnviarDinero = (props) => {
  return (
    <View style={styles.container}>
      <CuentaOrigen />
      <CuentaDestino />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

//make this component available to the app
export default EnviarDinero;
