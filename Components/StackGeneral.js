//import libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Inicio from "./Inicio/Inicio";
import MontoEnviar from "./EnviarDinero/MontoEnviar";
import CuentaOrigen from "./EnviarDinero/CuentaOrigen";
import CuentaDestino from "./EnviarDinero/CuentaDestino";
import EnviarDinero from "./EnviarDinero/EnviarDinero";
import EnviarFoto from "./EnviarDinero/EnviarFoto";
import Recargar from "./RecargarDinero/Recargar";
import TabGeneral from "./EnviarDinero/TabGeneral";

const Stack = createStackNavigator();

// create a component
const StackGeneral = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{
          title: "OMNI",
          headerStyle: {
            backgroundColor: "#0055b8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
      />
      <Stack.Screen
        name="Recargar"
        component={Recargar}
        options={({ navigation }) => ({
          title: "Recarga Moni",
          headerStyle: {
            backgroundColor: "#0055b8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Inicio");
              }}
            >
              <Ionicons style={styles.icono} name="md-close" size={24} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EnviarDinero"
        component={TabGeneral}
        options={({ navigation }) => ({
          title: "Envío de dinero",
          headerStyle: {
            backgroundColor: "#0055b8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Inicio");
              }}
            >
              <Ionicons style={styles.icono} name="md-close" size={24} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="CuentaOrigen"
        component={CuentaOrigen}
        options={({ navigation }) => ({
          title: "Envío de dinero",
          headerStyle: {
            backgroundColor: "#0055b8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Inicio");
              }}
            >
              <Ionicons style={styles.icono} name="md-close" size={24} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="CuentaDestino"
        component={CuentaDestino}
        options={({ navigation }) => ({
          title: "Envío de dinero",
          headerStyle: {
            backgroundColor: "#0055b8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Inicio");
              }}
            >
              <Ionicons style={styles.icono} name="md-close" size={24} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="MontoEnviar"
        component={MontoEnviar}
        options={({ navigation }) => ({
          title: "Envío de dinero",
          headerStyle: {
            backgroundColor: "#0055b8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Inicio");
              }}
            >
              <Ionicons style={styles.icono} name="md-close" size={24} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EnviarFoto"
        component={EnviarFoto}
        options={({ navigation }) => ({
          title: "Enviar Foto",
          headerStyle: {
            backgroundColor: "#0055b8",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Inicio");
              }}
            >
              <Ionicons style={styles.icono} name="md-close" size={24} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icono: {
    color: "#fff",
    flex: 1,
    marginRight: 15,
  },
});

export default StackGeneral;
