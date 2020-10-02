//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// create a component
const MontoEnviar = ({ route, navigation }) => {
  const { nombre } = route.params;
  return (
    <View style={styles.container}>
      <Text>MontoEnviar</Text>
      <Text>{nombre}</Text>
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
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default MontoEnviar;
