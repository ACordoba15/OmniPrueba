//import libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Inicio from "./Inicio";
import CuentaOrigen from "./CuentaOrigen";
import CuentaDestino from "./CuentaDestino";
import EnviarDinero from "./EnviarDinero";
import EnviarFoto from "./EnviarFoto";

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
        name="EnviarDinero"
        component={EnviarDinero}
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

//make this component available to the app
export default StackGeneral;
