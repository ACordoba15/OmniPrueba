//import liraries
import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Contactos from "./Contactos";
import MisSaldos from "./MisSaldos";
import { HeaderTitle } from "@react-navigation/stack";
import CuentaOrigen from "./CuentaOrigen";
// create a component
const TabGeneral = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <CuentaOrigen />
      <Tab.Navigator
        style={{ marginTop: 20 }}
        tabBarOptions={{
          activeTintColor: "#0055b8",
          activeBackgroundColor: "#fff",
          inactiveTintColor: "#000",
          inactiveBackgroundColor: "#fff",
        }}
      >
        <Tab.Screen
          name="Contactos"
          component={Contactos}
          options={{
            title: "Contactos",
            headerTintColor: "#000",
          }}
        />
        <Tab.Screen
          name="MisSaldos"
          component={MisSaldos}
          options={{ title: "Mis Saldos", headerTintColor: "#000" }}
        />
      </Tab.Navigator>
    </View>
  );
};

//make this component available to the app
export default TabGeneral;
