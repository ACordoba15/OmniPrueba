//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

/* Card con los datos de la cuenta origen Sección de tabs para seleccionar el
    contacto y mis saldos scrollView para los contactos, permisos para acceder
    a los contactos seleccionando uno se va a monto a enviar */

// create a component
const CuentaDestino = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Seleccionar cuenta destino</Text>
      <Button
        title="Enviar Dinero"
        onPress={() => {
          navigation.navigate("EnviarDinero");
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

//make this component available to the app
export default CuentaDestino;
