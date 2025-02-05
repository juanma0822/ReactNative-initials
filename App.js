import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import { Main } from "./components/Main";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

//Para imagenes fadeDuration, resizeMode-> ajustar tamaño de la imagen

//Para botones se puede usar TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
});
