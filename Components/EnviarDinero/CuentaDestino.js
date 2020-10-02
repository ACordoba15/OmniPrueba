//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Ionicons, Entypo, Octicons, FontAwesome5 } from "@expo/vector-icons";

/* Card con los datos de la cuenta origen Sección de tabs para seleccionar el
    contacto y mis saldos scrollView para los contactos, permisos para acceder
    a los contactos seleccionando uno se va a monto a enviar */

// create a component
const CuentaDestino = ({ navigation }) => {
  const cardCuentaDestino = (
    <View style={styles.cardHeader}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.textoTitulo}>Recargar</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.icono}>
            <Entypo name="wallet" size={24} color="white" />
          </View>
          <Text style={styles.texto}>Moni</Text>
        </View>
      </View>
    </View>
  );

  const cardContainer = <View style={styles.card}>{cardCuentaDestino}</View>;
  return <View style={styles.container}>{cardContainer}</View>;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 7,
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
    marginTop: 10,
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
export default CuentaDestino;
