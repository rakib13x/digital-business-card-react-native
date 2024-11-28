import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require(// @ts-ignore
        "./assets/favicon.png")}
        style={{
          width: 150,
          height: 150,
          borderRadius: 150,
          borderWidth: 5,
          borderColor: "black",
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Rakib Islam</Text>
      <Text style={{}}>is an unemployed.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
