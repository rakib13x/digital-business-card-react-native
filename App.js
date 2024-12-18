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
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const links = {
    github: "Rakib Islam",
    email: "rakib13x@gmail.com",
    x: "rakib13x",
  };
  const renderIcons = () => {
    return (
      <View style={{ flexDirection: "row", marginVertical: 10, gap: 10 }}>
        {links.github && <FontAwesome6 name="github" size={24} color="24" />}
        {links.email && <FontAwesome6 name="x-twitter" size={24} color="24" />}
        {links.x && <FontAwesome6 name="at" size={24} color="24" />}
      </View>
    );
  };
  const onContactMe = () => {
    console.warn("Contact Me");
    Linking.openURL("mailto:rakib13x@gmail.com");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
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
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Rakib Islam
            </Text>
            <Text style={{}}>is an unemployed</Text>

            {renderIcons()}

            <Button title="Contact me" onPress={onContactMe} />
            <Text style={{ padding: 10, fontSize: 16, lineHeight: 25 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Nulla vitae elit
            </Text>

            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
              Projects
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 10 }}
            >
              <ProjectCard
                name="Apple Cards"
                image={require(// @ts-ignore
                "./assets/projects/project1.jpeg")}
              />
              <ProjectCard
                name="Trello"
                image={require(// @ts-ignore
                "./assets/projects/project2.jpeg")}
              />
              <ProjectCard
                name="Flappy bird"
                image={require(// @ts-ignore
                "./assets/projects/project3.jpeg")}
              />
              <ProjectCard
                name="Todo app"
                image={require(// @ts-ignore
                "./assets/projects/project4.jpeg")}
              />
            </ScrollView>
            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
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
