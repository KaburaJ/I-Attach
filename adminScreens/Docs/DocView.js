import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Platform,
} from "react-native";
import WebView from "react-native-webview";
import wave from "../../assets/wave.png";
import { useState } from "react";
import pdf from "../../assets/industrysup.pdf";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function DocView() {
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  return (
    // <ScrollView style={styles.scrollViewContent}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={wave}
          style={{
            backgroundColor: "blue",
            objectFit: "cover",
            width: "100%",
          }}
        >
       <Ionicons name="arrow-back" size={24} color="white" style={{paddingTop:55, paddingLeft:20, position:"absolute"}} onPress={() => navigation.goBack()}/>   
          <Text style={styles.texts}>Document View</Text>
        </ImageBackground>
        <WebView
          source={{
            uri: "https://drive.google.com/file/d/1W08DCevRXLp0ZeiNtSC5FNyo5GD6xKAu/view?usp=sharing",
          }}
          bounces={true}
          useWebKit={true}
          scrollEnabled={true}
          style={{ marginTop:20, height:600, width: 370 }}
        />
      </SafeAreaView>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "white",
  },
  texts: {
    color: "white",
    fontSize: 23,
    marginTop: 50,
    marginBottom: 95,
    marginLeft: 56,
  },
  status: {
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 60,
    marginBottom: 30,
    borderRadius: 20,
    width: 300,
    marginTop: -60,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  documentList: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  documentItem: {
    marginBottom: 10,
  },
  fileName: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  webView: {
    flex: 1,
    height: 200,
  },
});
