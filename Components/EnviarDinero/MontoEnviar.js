//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons, Entypo, Octicons, FontAwesome5 } from "@expo/vector-icons";
import CuentaOrigen from "./CuentaOrigen";

// create a component
const MontoEnviar = ({ route, navigation }) => {
  const { nombre } = route.params;

  const cardCuentaOrigen = (
    <View style={styles.cardHeader}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.textoTitulo}>Cuenta Destino</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.icono}>
            <Entypo name="wallet" size={24} color="white" />
          </View>
          <Text style={styles.texto}>{nombre}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <CuentaOrigen />
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
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 120,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    justifyContent: "center",
    marginTop: 40,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textoTitulo: {
    fontSize: 18,
    margin: 10,
    textAlign: "left",
    fontWeight: "bold",
  },
  textoTitulo2: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    paddingLeft: 60,
    fontWeight: "bold",
    fontSize: 18,
  },
  texto: {
    fontSize: 18,
    margin: 10,
    textAlign: "left",
  },
  icono: {
    margin: 10,
    borderWidth: 6,
    borderColor: "#0055b8",
    borderRadius: 70,
    borderStyle: "solid",
    backgroundColor: "#0055b8",
  },
});

//make this component available to the app
export default MontoEnviar;
