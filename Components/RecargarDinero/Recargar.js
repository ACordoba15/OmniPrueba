//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import CardCuenta from "./CardCuenta";
import MontoRecarga from "./MontoRecarga";

// create a component
const Recargar = () => {
  return (
    <View style={styles.container}>
      <CardCuenta />
      <MontoRecarga />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eae9e4",
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
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texto: {
    fontSize: 20,
    margin: 10,
    textAlign: "left",
  },
  textoDinero: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  icono: {
    margin: 10,
    borderWidth: 6,
    borderColor: "#0055b8",
    borderRadius: 70,
    borderStyle: "solid",
    backgroundColor: "#0055b8",
  },
  dinero: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

//make this component available to the app
export default Recargar;
