//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Card } from "react-native-elements";
import { Ionicons, Entypo, Octicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// create a component
const CardInfo = () => {
  const [dinero, setDinero] = useState(10000); // Agregar máscaras
  const navigation = useNavigation();

  const CardHeader = (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Recargar");
        }}
      >
        <View style={styles.cardHeader}>
          {/* Texto moni */}
          <Text style={styles.texto}>Moni</Text>
          {/* Texto dinero */}
          <View style={styles.dinero}>
            <Text style={styles.textoDinero}>
              ₡{parseFloat(dinero).toFixed(2)}
            </Text>
            <Ionicons style={styles.icono} name="ios-arrow-forward" size={24} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const CardFooter = (
    <View>
      <TouchableOpacity
        onPress={() => {
          alert("Esta función no está disponible");
        }}
      >
        <View style={styles.cardFooter}>
          <Text style={styles.texto}>Solicitá tu tarjeta Moni</Text>
          <Ionicons style={styles.icono} name="md-card" size={34} />
        </View>
      </TouchableOpacity>
    </View>
  );

  const Container = (
    <View>
      {CardHeader}
      <View style={styles.divider}></View>
      {CardFooter}
    </View>
  );

  //return <View style={styles.container}>{cardContainer}</View>;
  return (
    <View style={styles.container}>
      <View style={styles.card}>{Container}</View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    height: 180,
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
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray",
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
  },
  dinero: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

//make this component available to the app
export default CardInfo;
