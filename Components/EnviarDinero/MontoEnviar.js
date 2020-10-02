//import libraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Entypo, Octicons, FontAwesome } from "@expo/vector-icons";
import { TextInputMask } from "react-native-masked-text";

const { width: WIDTH } = Dimensions.get("window");
// create a component
const MontoEnviar = ({ route, navigation }) => {
  const { nombre } = route.params;
  const [dinero, setDinero] = useState(10000.0);
  const [monto, setMonto] = useState(0);

  const cardCuentaOrigen = (
    <View style={styles.cardHeader}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.textoTitulo}>Cuenta Origen</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.icono}>
            <Entypo name="wallet" size={24} color="white" />
          </View>
          <Text style={styles.texto}>Moni</Text>
        </View>
      </View>
    </View>
  );

  const cardCuentaDestino = (
    <View style={styles.cardHeader}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.textoTitulo}>Cuenta Destino</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.icono}>
            <FontAwesome name="user" size={24} color="white" />
          </View>
          <Text style={styles.texto}>{nombre}</Text>
        </View>
      </View>
    </View>
  );

  const cardContainer = (
    <View>
      <View style={styles.card}>{cardCuentaOrigen}</View>
      <View style={styles.card}>{cardCuentaDestino}</View>
    </View>
  );

  const inputDinero = (
    <View>
      <Text style={styles.tituloTexto}>¿Cuánto dinero querés enviar?</Text>
      <TextInputMask
        style={styles.input}
        keyboardType="numeric"
        type={"money"}
        options={{
          precision: 2,
          separator: ".",
          delimiter: ",",
          unit: "₡",
          suffixUnit: "",
        }}
        value={monto}
        onChangeText={(text) => {
          var m1 = text.replace(",", "");
          var m2 = m1.replace(".", "");
          var m3 = m2.replace("₡", "");
          setMonto(m3);
        }}
      />
      <View style={styles.divider}></View>
      <Text style={styles.textoInfo}>Monto disponible ₡10,000.00</Text>
    </View>
  );

  const botonSiguiente = (
    <View>
      <TouchableOpacity
        style={styles.boton}
        onPress={() => {
          //console.log(parseInt(monto.substring(0, monto.length - 2)));
          var res = monto.toString().substring(0, monto.length - 2);
          if (parseInt(res) > dinero) {
            alert("Su cuenta no posee los fondos necesarios");
          } else {
            navigation.navigate("EnviarFoto");
          }
        }}
      >
        <Text style={styles.textoBoton}>Siguiente</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>{cardContainer}</View>
      <View style={{ marginTop: 50 }}>{inputDinero}</View>
      <View>{botonSiguiente}</View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 100,
    width: WIDTH - 70,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
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
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray",
  },
  textoInfo: {
    fontSize: 12,
    textAlign: "center",
  },
  input: {
    color: "#0055b8",
    fontSize: 24,
    textAlign: "center",
    borderBottomColor: "#0055b8",
    marginTop: 40,
  },
  textoBoton: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
});

//make this component available to the app
export default MontoEnviar;
