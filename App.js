import { FontAwesome6 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const onContactMe = () => {
    console.warn("Contact Me");
    Linking.openURL("mailto:rakib13x@gmail.com");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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

        <Button title="Contact me" onPress={onContactMe} />
        <Text style={{ padding: 10, fontSize: 16, lineHeight: 25 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Nulla vitae elit libero, a
          pharetra augue. Curabitur blandit tempus porttitor. Integer posuere
          erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo
          quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed
          posuere consectetur est at lobortis. Donec id elit non mi porta
          gravida at eget metus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
          dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
          semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Nulla
          vitae elit libero, a pharetra augue. Curabitur blandit tempus
          porttitor. Integer posuere erat a ante venenatis dapibus posuere velit
          aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
          venenatis vestibulum. Sed posuere consectetur est at lobortis. Donec
          id elit non mi porta gravida at eget metus.
        </Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
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
