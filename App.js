import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./components/style.js";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}></View>
      <View style={styles.circle}></View>
      <TouchableOpacity style={styles.detailWrapper}>
        <View style={styles.detail}>
          <Text style={styles.buttonText}>Buy</Text>
        </View>
      </TouchableOpacity>
      <Image style={styles.image} source={require("./assets/png/gt3rs.png")} />
      <Image style={styles.logo} source={require("./assets/png/logo.png")} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>911 GT3 RS</Text>
        <Text style={styles.longText}>
          Learning from every mistake. Because the biggest challenge is to
          remain unbeatable. With this attitude, Porsche keeps pushing the
          boundaries of what is possible.
        </Text>
      </View>
    </View>
  );
}
