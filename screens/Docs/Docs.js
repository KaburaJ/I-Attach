import React, { useState } from "react";
import {
  ImageBackground,
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import wave from "../../assets/wave.png";
import * as Progress from "react-native-progress";
import * as DocumentPicker from "expo-document-picker";

export default function Docs() {
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
            marginTop: "-8%",
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
                color: "#8E8E8E",
                marginLeft: "-1%",
                marginBottom: "10%",
              },
            ]}
          >
            Share Your Logbook
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
            Be sure to update and share your logbook at least once weekly.
          </Text>
          <Text
            style={[
              styles.texts,
              {
                fontSize: 20,
                textAlign: "center",
                color: "#8E8E8E",
                marginLeft: "-1%",
                marginTop: "-3%",
                marginBottom: "10%",
              },
            ]}
          >
            Logbook Upload
          </Text>
          <View style={styles.background}>
            <View style={styles.button}>
              <TouchableOpacity>
                <Button
                  title="upload your file"
                  color="blue"
                  onPress={pickDocument}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={[
              styles.texts,
              {
                fontSize: 20,
                textAlign: "center",
                color: "#8E8E8E",
                marginLeft: "-1%",
                marginTop: "5%",
                marginBottom: "10%",
              },
            ]}
          >
            Add your Remarks
          </Text>
          <TextInput
            placeholder="I am ..."
            style={{
              borderColor: "blue",
              borderWidth: 1,
              height: 100,
              borderRadius: 10,
              padding: 20,
            }}
          >
            I am ...
          </TextInput>
          <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>
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

  imageContainer: {
    marginBottom: 60,
    display: "flex",
    flexDirection: "column",
    paddingBottom: 90,
    backgroundColor: "red",
  },
  texts: {
    color: "white",
    fontSize: 23,
    marginTop: 50,
    marginBottom: 95,
    marginLeft: 15,
  },
  status: {
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 60,
    marginBottom:30,
    borderRadius: 20,
    width:340,
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
  background: {
    backgroundColor: "transparent",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
    width: 300,
  },
  file: {
    color: "black",
    marginHorizontal: 145,
  },
  button: {
    marginTop: 30,
    marginHorizontal: 60,
  },
  button1: {
    backgroundColor: "blue",
    borderColor: "blue",
    width:200,
    marginTop:40,
    marginLeft:50,
    borderWidth: 3,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
