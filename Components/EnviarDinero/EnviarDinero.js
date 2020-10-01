//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// create a component
/* Card cuenta origen 
    Card cuenta destino 
    Monto a enviar 
    Confirmar 
    Enviar foto */
const EnviarDinero = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>¿Cuánto dinero querés enviar?</Text>
      <Button
        title="Enviar Foto"
        onPress={() => {
          navigation.navigate("EnviarFoto");
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
export default EnviarDinero;
