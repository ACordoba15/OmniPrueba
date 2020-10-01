//import liraries
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// Selecciona la cuenta desde donde se enviará el dinero
/* Card para seleccinar la cuenta */
/* Agregar dinero a esa cuenta */

// create a component
const CuentaOrigen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Seleccionar cuenta origen</Text>
      <Button
        title="Cuenta Origen"
        onPress={() => {
          navigation.navigate("CuentaDestino");
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
export default CuentaOrigen;
