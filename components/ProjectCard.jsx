import { Image, Text, View } from "react-native";

export default function ProjectCard({ image, name }) {
  return (
    <View>
      <Image
        source={image}
        style={{ height: 150, aspectRatio: 16 / 9, borderRadius: 10 }}
      />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          color: "dimgray",
          marginTop: 10,
        }}
      >
        {name}
      </Text>
    </View>
  );
}
