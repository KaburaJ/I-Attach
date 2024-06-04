import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import doc from "../../assets/docs.png";
import wave from "../../assets/wave.png";
import { useNavigation } from "@react-navigation/native";

export default function registrationForm() {
  const [click, setClick] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={wave}
        style={{
          backgroundColor: "blue",
          objectFit: "cover",
          width: "100%",
          marginTop: "400px",
        }}
      >
        <Text style={styles.texts}>Sign Up</Text>
      </ImageBackground>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Registration Number"
          value={regNumber}
          onChangeText={setRegNumber}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch
            value={click}
            onValueChange={setClick}
            trackColor={{ true: "blue", false: "gray" }}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <View>
          <Pressable onPress={() => Alert.alert("Forget Password!")}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("mainScreen")
          }
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>

      <Text style={styles.footerText}>
        Don't Have Account?<Text style={styles.signup} onPress={() => navigation.navigate("Login") }> Sign In</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    height: 160,
    width: 170,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 40,
    color: "blue",
    marginTop: "15%",
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 15,
    paddingTop: 5,
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 7,
    marginBottom: "20px",
    marginTop: "7%",
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 13,
  },
  forgetText: {
    fontSize: 11,
    color: "blue",
  },
  button: {
    backgroundColor: "blue",
    height: 45,
    borderColor: "white",
    marginBottom: "20px",
    borderWidth: 2,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: "5px",
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50,
    borderColor: "white",
    paddingBottom: "20px",
  },
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6,
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23,
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    paddingTop: 20,
    textAlign: "center",
    color: "gray",
  },
  signup: {
    color: "blue",
    fontSize: 13,
  },
  imageContainer: {
    marginBottom: 60,
    display: "flex",
    flexDirection: "column",
    paddingBottom: 90,
    backgroundColor: "red",
  },

  texts: {
    color: "white",
    fontSize: 40,
    marginTop: 60,
    marginBottom: 85,
    marginLeft: 53,
  },
});
