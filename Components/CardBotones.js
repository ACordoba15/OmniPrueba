//import liraries
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Ionicons, Entypo, Octicons, FontAwesome5 } from "@expo/vector-icons";

// create a component
const CardBotones = () => {
  const navigation = useNavigation();

  const botonRecargar = (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <View style={styles.cardButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CuentaOrigen");
          }}
        >
          <Entypo name="wallet" size={24} color="blue" />
        </TouchableOpacity>
      </View>
      <Text style={(styles.texto, { color: "gray" })}>Recargá</Text>
      <Text style={(styles.texto, { color: "#000" })}>Moni</Text>
    </View>
  );

  const botonEnviar = (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <View style={styles.cardButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CuentaOrigen");
          }}
        >
          <FontAwesome5 name="money-bill-wave" size={24} color="blue" />
        </TouchableOpacity>
      </View>
      <Text style={(styles.texto, { color: "gray" })}>Enviá</Text>
      <Text style={(styles.texto, { color: "#000" })}>Dinero</Text>
    </View>
  );

  const botonSolicitar = (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <View style={styles.cardButton2}>
        <TouchableOpacity
          onPress={() => {
            alert("Esta función no está disponible");
          }}
        >
          <Octicons name="credit-card" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={(styles.texto, { color: "gray" })}>Solicitá tu</Text>
      <Text style={(styles.texto, { color: "#000" })}>Tarjeta</Text>
    </View>
  );

  const botones = (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        {botonRecargar}
        {botonEnviar}
        {botonSolicitar}
      </View>
    </View>
  );

  return <View style={styles.container}>{botones}</View>;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignSelf: "center",
    //justifyContent: "space-around",
    width: "80%",
    //justifyContent: "center",
  },
  cardButton: {
    height: 70,
    width: 70,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardButton2: {
    height: 70,
    width: 70,
    backgroundColor: "orange",
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 15,
    textAlign: "center",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray",
  },
});

//make this component available to the app
export default CardBotones;
