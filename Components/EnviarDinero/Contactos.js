//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width: WIDTH } = Dimensions.get("window");
// create a component
const Contactos = () => {
  const [permiso, setPermiso] = useState(false);

  const TextoPermisos = (
    <View style={styles.icono}>
      <FontAwesome name="user-circle" size={100} color="#0055b8" />
      <Text style={styles.texto}>
        OMNiMoni necesita permisos para acceder a tus contactos{" "}
      </Text>
    </View>
  );
  const botonPermiso = (
    <View>
      <TouchableOpacity
        style={styles.boton}
        onPress={() => {
          alert("Permisos otorgados");
          setPermiso(true);
        }}
      >
        <Text style={styles.textoBoton}>Dar permisos</Text>
      </TouchableOpacity>
    </View>
  );

  const seccionPermiso = (
    <View>
      {TextoPermisos}
      {botonPermiso}
    </View>
  );

  const contactos = (
    <View>
      <Text>Lista de contactos</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {permiso == false ? seccionPermiso : contactos}
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
  icono: {
    alignItems: "center",
  },
  texto: {
    textAlign: "center",
    width: WIDTH - 100,
    fontSize: 18,
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
export default Contactos;
