//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { listaContactos } from "./listaContactos";
import { useNavigation } from "@react-navigation/native";

const { width: WIDTH } = Dimensions.get("window");
// create a component
const Contactos = () => {
  const navigation = useNavigation();

  const [permiso, setPermiso] = useState(false);
  const [Contactos, setContactos] = useState([]);

  useEffect(() => {
    setContactos(listaContactos);
  }, []);
  const permisoContactos = () => {
    console.log("Contactos:", listaContactos);
  };

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
          permisoContactos();
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
      <FlatList
        data={listaContactos}
        renderItem={({ item }) => (
          <View>
            <View style={styles.divider}></View>
            <TouchableOpacity
              onPress={() => {
                alert(item.name);
                navigation.navigate("MontoEnviar", { nombre: item.name });
              }}
            >
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <FontAwesome name="user-circle" size={40} color="#0055b8" />
                  <Text style={styles.textoTitulo}> {`${item.name} `}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        //Setting the number of column
        numColumns={1}
        keyExtractor={(item) => item.name}
      />
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
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
  card: {
    width: WIDTH - 20,
    height: 45,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    margin: 15,
    paddingHorizontal: 20,
  },
  cardHeader: {
    flexDirection: "row",
    //justifyContent: "space-between",
  },
  textoTitulo: {
    fontSize: 18,
    margin: 10,
    textAlign: "left",
    fontWeight: "bold",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray",
  },
});

//make this component available to the app
export default Contactos;
