//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const { width: WIDTH } = Dimensions.get("window");

// create a component
const EnviarFoto = () => {
  const [permiso, setPermiso] = useState(null);
  const [tipoCamara, setTipoCamara] = useState(Camera.Constants.Type.back);
  const [modoCamara, setModoCamara] = useState(null);
  const [sacarFoto, setSacarFoto] = useState(false);
  const [ruta, setRuta] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    ObtenerPermisosAsync();
  }, []);

  const ObtenerPermisosAsync = async () => {
    // Camera roll Permission
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Lo sentimos, necesitamos permiso para usar la camara");
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setPermiso(status === "granted");
  };

  const formatoCamara = () => {
    setTipoCamara(
      tipoCamara === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const tomarFoto = async () => {
    if (this.camera) {
      let foto = await this.camera.takePictureAsync();
      setSacarFoto(true);
      setRuta(foto);
    }
  };

  const seleccionarFoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    setSacarFoto(true);
    setRuta(result);
  };

  const CancelarImagen = () => {
    setSacarFoto(false);
  };

  const guardarImagen = () => {
    alert("Se ha enviado la imagen");
    navigation.navigate("Inicio");
  };

  return permiso === null ? (
    <View>
      <Text>No se aceptaron los permisos</Text>
    </View>
  ) : permiso === false ? (
    <View>
      <Text>No se tiene acceso a la cámara</Text>
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      {sacarFoto == true ? (
        <View style={styles.backgroundContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: ruta.uri }} style={styles.image} />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 30,
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
              onPress={() => guardarImagen()}
            >
              <MaterialCommunityIcons
                name="check"
                style={{ color: "#000", fontSize: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
              onPress={() => CancelarImagen()}
            >
              <MaterialCommunityIcons
                name="close"
                style={{ color: "#000", fontSize: 40 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Camera
          style={{ flex: 1 }}
          type={tipoCamara}
          ref={(ref) => {
            this.camera = ref;
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 30,
            }}
          >
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
              onPress={() => seleccionarFoto()}
            >
              <Ionicons
                name="ios-photos"
                style={{ color: "#fff", fontSize: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
              onPress={() => tomarFoto()}
            >
              <FontAwesome
                name="camera"
                style={{ color: "#fff", fontSize: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                backgroundColor: "transparent",
              }}
              onPress={() => formatoCamara()}
            >
              <MaterialCommunityIcons
                name="camera-switch"
                style={{ color: "#fff", fontSize: 40 }}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      )}
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
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  imageContainer: {
    backgroundColor: "#fff",
    marginTop: 130,
  },

  image: {
    width: WIDTH - 55,
    height: 350,
    borderRadius: 40,
  },
});

//make this component available to the app
export default EnviarFoto;
