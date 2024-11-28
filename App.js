import { FontAwesome6 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
        }}
        style={{ width: "100%", aspectRatio: 16 / 9 }}
      />
      <Image
        source={require(// @ts-ignore
        "./assets/vadim.png")}
        style={{
          width: 150,
          height: 150,
          borderRadius: 150,
          borderWidth: 5,
          borderColor: "white",
          marginTop: -75,
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Rakib Islam</Text>
      <Text style={{}}>is an unemployed</Text>
      <View style={{ flexDirection: "row", marginVertical: 10, gap: 10 }}>
        <FontAwesome6 name="github" size={24} color="24" />
        <FontAwesome6 name="x-twitter" size={24} color="24" />
        <FontAwesome6 name="at" size={24} color="24" />
      </View>
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
