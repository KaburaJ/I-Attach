import React from "react";
import {
  ImageBackground,
  View,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import wave from "../../assets/wave.png";
import { Asset } from "expo-asset";
import { Buffer } from "buffer";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as DocumentPicker from "expo-document-picker";


export default function AdminResources() {
  const handleError = (error) => {
    console.error("An error occurred while loading the PDF:", error);
  };

  const fetchAndSharePDF = async () => {
    try {
      // Fetch PDF file
      const sample = require("../../assets/industrysup.pdf");
      const source = Asset.fromModule(sample).uri;
      const res = await fetch(source);
      const data = await res.arrayBuffer();

      // Convert ArrayBuffer to base64
      const buff = Buffer.from(data);
      const base64 = buff.toString("base64");

      // Write base64 string to file
      const fileUri = FileSystem.documentDirectory + "industrysup.pdf";
      await FileSystem.writeAsStringAsync(fileUri, base64, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Share PDF file
      await Sharing.shareAsync(fileUri);
    } catch (error) {
      console.error(
        "An error occurred while fetching and sharing the PDF:",
        error
      );
    }
  };

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
            marginTop:"-8%"
          }}
        >
          <Text style={styles.texts}>Resources</Text>
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
            External Attachment Docs
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
            Supervisor Assessment Form
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
            Find the assessment form for your attachment supervisor in the
            company in which you are attached.
          </Text>
          <View style={styles.background}>
            <View style={{paddingBottom:30, width:250, paddingLeft:40}}>
              <TouchableOpacity>
                <Button
                  title="Upload alternative file"
                  color="blue"
                  onPress={pickDocument}
                ><Text style={{color:"white"}}>Upload alternative</Text></Button>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            
          >
            <Text
              style={[styles.buttonText, { marginTop: "-3%" }]}
              onPress={fetchAndSharePDF}
            >
              Get Resource
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.texts,
              {
                fontSize: 20,
                textAlign: "center",
                color: "#8E8E8E",
                marginLeft: "-1%",
                marginTop: "10%",
                marginBottom: "10%",
              },
            ]}
          >
            LogBook
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
            Click below to get access to a sample of the logbook to be filled
            weekly during your attachment locally on your device.
          </Text>
          <View style={styles.background}>
            <View style={{paddingBottom:30, width:250, paddingLeft:40}}>
              <TouchableOpacity>
                <Button
                  title="Upload alternative file"
                  color="blue"
                  onPress={pickDocument}
                ><Text style={{color:"white"}}>Upload alternative</Text></Button>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            
          >
            <Text
              style={[styles.buttonText, { marginTop: "-3%" }]}
              onPress={fetchAndSharePDF}
            >
              Get Resource
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.texts,
              {
                fontSize: 20,
                textAlign: "center",
                color: "#8E8E8E",
                marginLeft: "-1%",
                marginTop: "10%",
                marginBottom: "10%",
              },
            ]}
          >
            LogBook Guidelines
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
            Find the guidelines for your industrial attachment all the way from
            logbook-filling.
          </Text>
          <View style={styles.background}>
            <View style={{paddingBottom:30, width:250, paddingLeft:40}}>
              <TouchableOpacity>
                <Button
                  title="Upload alternative file"
                  color="blue"
                  onPress={pickDocument}
                ><Text style={{color:"white"}}>Upload alternative</Text></Button>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            
          >
            <Text
              style={[styles.buttonText, { marginTop: "-3%" }]}
              onPress={fetchAndSharePDF}
            >
              Get Resource
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.texts,
              {
                fontSize: 20,
                textAlign: "center",
                color: "#8E8E8E",
                marginLeft: "-1%",
                marginTop: "10%",
                marginBottom: "10%",
              },
            ]}
          >
            Assigned Industrial Attachment Supervisors
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
            Find the official list of the industrial attachment assignment of
            the assessment supervisors.
          </Text>
          <View style={styles.background}>
            <View style={{paddingBottom:30, width:250, paddingLeft:40}}>
              <TouchableOpacity>
                <Button
                  title="Upload alternative file"
                  color="blue"
                  onPress={pickDocument}
                ><Text style={{color:"white"}}>Upload alternative</Text></Button>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            
          >
            <Text
              style={[styles.buttonText, { marginTop: "-3%" }]}
              onPress={fetchAndSharePDF}
            >
              Get Resource
            </Text>
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
  button: {
    marginBottom: 20,
    backgroundColor: "blue",
    // borderColor: "none",
    // borderWidth: 3,
    paddingVertical: 10,
    height:50,
    width:300,
    // marginLeft:60,
    paddingTop:20,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
