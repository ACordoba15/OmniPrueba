//import liraries
import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width: WIDTH } = Dimensions.get("window");
// create a component
const MontoRecarga = () => {
  const navigation = useNavigation();
  const [dinero, setDinero] = useState(10000.0);
  const [cargando, setCargando] = useState(true);

  const guardarDinero = async () => {
    //var dineroFix = dinero.substring(1, dinero.length);
    alert(`Se han agregado ₡ ${parseFloat(dinero).toFixed(2)} a su cuenta`);

    navigation.navigate("Inicio");
  };

  const inputDinero = (
    <View>
      <Text style={styles.tituloTexto}>¿Cuánto dinero querés recargar?</Text>
      <TextInput
        value={`₡${parseFloat(dinero).toFixed(2)}`}
        style={styles.input}
      />
      <View style={styles.divider}></View>
    </View>
  );

  const buttonAgregar = (
    <View>
      <TouchableOpacity style={styles.boton} onPress={guardarDinero}>
        <Text style={styles.textoBoton}>Confirmar recarga</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column" }}>{inputDinero}</View>
      <View>{buttonAgregar}</View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    color: "#0055b8",
    fontSize: 24,
    textAlign: "center",
    borderBottomColor: "#0055b8",
    marginTop: 40,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray",
  },
  tituloTexto: {
    fontSize: 20,
    fontWeight: "bold",
  },
  boton: {
    width: WIDTH - 70,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#0055b8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    //marginHorizontal: 25,
  },
  textoBoton: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});

//make this component available to the app
export default MontoRecarga;
