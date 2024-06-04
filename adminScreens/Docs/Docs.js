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
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as DocumentPicker from "expo-document-picker";

export default function AdminDocs() {
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    console.log(result);
  };
  
  return (
    <ScrollView style={styles.scrollViewContent}>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={wave}
          style={{
            backgroundColor: "blue",
            objectFit: "cover",
            width: "100%",
          }}
        >
          <Text style={styles.texts}>Documents</Text>
        </ImageBackground>
        <View style={styles.status}>
          <Text
            style={[
              styles.texts,
              {
                fontSize: 25,
                textAlign: "center",
                color: "blue",
                marginLeft: "-1%",
                marginBottom: "10%",
              },
            ]}
          >
            Documents Shared with You
          </Text>
          <Text
            style={[
              styles.texts,
              {
                fontSize: 16,
                textAlign: "center",
                color: "#8E8E8E",
                marginLeft: "-1%",
                marginTop: "-3%",
                marginBottom: "10%",
              },
            ]}
          >
            The documents below are shared by the students assigned to you for
            supervision via IAttach.
          </Text>
        </View>
        <Text
            style={[
              styles.texts,
              {
                fontSize: 25,
                textAlign: "center",
                color: "blue",
                marginLeft: "-1%",
                marginBottom: "1%",
                marginTop:"2%"
              },
            ]}
          >
            Documents
          </Text>
        <View
          style={[styles.status, { marginTop: 20, height:100, paddingBottom:0 }]}
        >
          <MaterialCommunityIcons name="file-document" size={34} color="blue" style={{marginTop:10}} />
          <Text onPress={() => navigation.push("docs viewer")} style={[
              styles.texts,
              {
                fontSize: 18,
                color: "#8E8E8E",
                marginLeft: "12%",
                marginTop: -30,
                marginBottom: "10%",
              },
            ]}>Sample Example Document 1</Text>
        </View>
        <View
          style={[styles.status, { marginTop: 20, height:100, paddingBottom:0 }]}
        >
          <MaterialCommunityIcons name="file-document" size={34} color="blue" style={{marginTop:10}} />
          <Text onPress={() => navigation.push("docs viewer")} style={[
              styles.texts,
              {
                fontSize: 18,
                color: "#8E8E8E",
                marginLeft: "12%",
                marginTop: -30,
                marginBottom: "10%",
              },
            ]}>Sample Example Document 1</Text>
        </View>
        <View
          style={[styles.status, { marginTop: 20, height:100, paddingBottom:0 }]}
        >
          <MaterialCommunityIcons name="file-document" size={34} color="blue" style={{marginTop:10}} />
          <Text onPress={() => navigation.push("docs viewer")} style={[
              styles.texts,
              {
                fontSize: 18,
                color: "#8E8E8E",
                marginLeft: "12%",
                marginTop: -30,
                marginBottom: "10%",
              },
            ]}>Sample Example Document 1</Text>
        </View>
        <View
          style={[styles.status, { marginTop: 20, height:100, paddingBottom:0 }]}
        >
          <MaterialCommunityIcons name="file-document" size={34} color="blue" style={{marginTop:10}} />
          <Text onPress={() => navigation.push("docs viewer")} style={[
              styles.texts,
              {
                fontSize: 18,
                color: "#8E8E8E",
                marginLeft: "12%",
                marginTop: -30,
                marginBottom: "10%",
              },
            ]}>Sample Example Document 1</Text>
        </View>
        {/* <WebView
            source={{
              uri:
                Platform.OS === "android" &&
                "https://www.tutorialspoint.com/react_native/react_native_tutorial.pdf",
            }}
            startInLoadingState={true}
            onError={(syntheticEvent) => {
              const { nativeEvent } = syntheticEvent;
              console.error("WebView error:", nativeEvent);
              setError(true);
            }}
          /> */}
        {/* <WebView
          source={doc}
          onError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            console.error("WebView error:", nativeEvent);
            setError(true);
          }}
        /> */}
        {/* <WebView source={pdf} startInLoadingState={true} /> */}
        {error && <Text style={{ color: "red" }}>Failed to load PDF</Text>}
      </SafeAreaView>
    </ScrollView>
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
    marginLeft: 18,
  },
  status: {
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 60,
    marginBottom: 30,
    borderRadius: 20,
    width: 340,
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
