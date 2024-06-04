import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import doc from "../../assets/docs.png";
import wave from "../../assets/wave.png";
import { useNavigation } from "@react-navigation/native";

export default function Landing() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground source={wave} style={{backgroundColor:"blue", objectFit:"cover", width:"100%"}}>
        <Image style={styles.image} source={doc} />
        <Text style={styles.texts}>I-Attach</Text>
      </ImageBackground>
      {/* <Text style={styles.texts}>I-Attach</Text> */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        {/* <Text style={[styles.buttonText, {color:"black", paddingLeft:"48%", marginBottom: 20}]}>or</Text> */}
        {/* <Text style={[styles.buttonText, {color:"black", paddingLeft:"26%", textDecorationLine:"underline"}]}>Continue as a guest</Text> */}
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
    backgroundColor: "white",
  },
  imageContainer: {
    marginBottom: 30,
    display: "flex",
    flexDirection: "column",
    paddingBottom: 90, 
    backgroundColor:"blue"
  },
  image: {
    objectFit: "contain",
    width:450,
    height:500,
    marginLeft:"-13%",
    marginTop:"-20%",
  },
  texts: {
    color: "white",
    fontSize: 40,
    marginTop: "-20%",
    marginBottom: "45%",
    marginLeft:"20%"
  },
  buttons: {
    width: "70%",
    marginTop: "-2%",
  },
  button: {
    marginBottom: 20,
    backgroundColor: "transparent",
    borderColor:"blue",
    borderWidth:3,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    
  },
});
