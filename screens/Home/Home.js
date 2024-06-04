import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import doc from "../../assets/docs.png";
import wave from "../../assets/wave.png";
import * as Progress from "react-native-progress";
import Dropdown from "../../components/dropdown";

export default function Home() {
  return (
    <ScrollView style={styles.scrollViewContent}>
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
          <Text style={styles.texts}>Welcome Peter!</Text>
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
            Attachment Status
          </Text>
          <Text
            style={[
              styles.texts,
              {
                fontSize: 20,
                textAlign: "center",
                color: "#8E8E8E",
                marginLeft: "-1%",
                marginTop:"-3%",
                marginBottom: "10%",
              },
            ]}
          >
            Logbook Status
          </Text>
          <Progress.Bar
            progress={0.3}
            width={300}
            height={30}
            borderRadius={20}
            color={"blue"}
            borderColor={"blue"}
            borderWidth={0}
            unfilledColor="#E0E0DE"
          />
          <Text
            style={[
              styles.texts,
              {
                fontSize: 20,
                textAlign: "center",
                color: "#8E8E8E",
                marginLeft: "-1%",
                marginBottom: "10%",
              },
            ]}
          >
            Attachment Progress
          </Text>
          <Progress.Pie
            color={"blue"}
            borderColor={"blue"}
            borderWidth={0}
            unfilledColor="#E0E0DE"
            progress={0.4}
            size={160}
            style={{ marginLeft: "25%", marginTop: "-5%" }}
          />
        </View>
        <View style={{ height: 1200, marginBottom:"-50%" }}>
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
            Supervison Details
          </Text>
          <ScrollView horizontal={true}>
            <View
              style={[
                styles.status,
                {
                  backgroundColor: "blue",
                  width: 300,
                  height: 300,
                  marginTop: "-1%",
                  marginHorizontal: 10,
                },
              ]}
            >
              
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "white",
                  marginLeft: "-1%",
                  marginTop: "18%",
                }}
              >
                Dr. R. J. Amin
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  textAlign: "center",
                  color: "#8E8E8E",
                  marginLeft: "-1%",
                  marginTop: "1%",
                }}
              >
                0712345678
              </Text>
              <Text
                style={[
                  styles.texts,
                  {
                    fontSize: 20,
                    textAlign: "center",
                    color: "white",
                    marginLeft: "-1%",
                  },
                ]}
              >
                Your Supervisor's Details
              </Text>
            </View>
            <View
              style={[
                styles.status,
                {
                  backgroundColor: "blue",
                  width: 300,
                  height: 300,
                  marginTop: "-1%",
                  marginHorizontal: 10,
                },
              ]}
            >
              
               <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "white",
                  marginLeft: "-1%",
                  marginTop: "18%",
                }}
              >
                Dr. R. J. Amin
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  textAlign: "center",
                  color: "#8E8E8E",
                  marginLeft: "-1%",
                  marginTop: "1%",
                }}
              >
                0712345678
              </Text>
              <Text
                style={[
                  styles.texts,
                  {
                    fontSize: 20,
                    textAlign: "center",
                    color: "white",
                    marginLeft: "-1%",
                  },
                ]}
              >
                Your Supervisor's Details
              </Text>
            </View>
          </ScrollView>
          <Text
            style={[
              styles.texts,
              {
                fontSize: 25,
                textAlign: "center",
                color: "#8E8E8E",
                marginLeft: "-1%",
                marginBottom: "1%",
                marginTop: "-48%",
              },
            ]}
          >
            Company Details
          </Text>
          <Dropdown />
          <ScrollView horizontal={true}>
            <View
              style={[
                styles.status,
                {
                  backgroundColor: "blue",
                  width: 300,
                  height: 300,
                  marginTop: "-1%",
                  paddingBottom:10,
                  marginHorizontal: 10,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "white",
                  marginLeft: "-1%",
                  marginTop: "10%",
                }}
              >
                DT Dobie
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  textAlign: "center",
                  color: "white",
                  marginLeft: "-1%",
                  marginTop: "1%",
                }}
              >
                PO BOX 227-00100
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  textAlign: "center",
                  color: "#8E8E8E",
                  marginLeft: "-1%",
                  marginTop: "1%",
                }}
              >
                Nairobi, Kenya
              </Text>
              <Text
                style={[
                  styles.texts,
                  {
                    fontSize: 20,
                    textAlign: "center",
                    color: "white",
                    marginLeft: "-1%",
                  },
                ]}
              >
                Company of Attachment
              </Text>
            </View>
            <View
              style={[
                styles.status,
                {
                  backgroundColor: "blue",
                  width: 300,
                  height: 300,
                  marginTop: "-1%",
                  paddingBottom:10,
                  marginHorizontal: 10,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "white",
                  marginLeft: "-1%",
                  marginTop: "10%",
                }}
              >
                DT Dobie
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "white",
                  marginLeft: "-1%",
                  marginTop: "1%",
                }}
              >
                PO BOX 227-00100
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  textAlign: "center",
                  color: "#8E8E8E",
                  marginLeft: "-1%",
                  marginTop: "1%",
                }}
              >
                Nairobi, Kenya
              </Text>
              <Text
                style={[
                  styles.texts,
                  {
                    fontSize: 20,
                    textAlign: "center",
                    color: "white",
                    marginLeft: "-1%",
                  },
                ]}
              >
                Company of Attachment
              </Text>
            </View>
          </ScrollView>
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
    marginLeft: 23,
  },
  status: {
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 60,
    borderRadius: 20,
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
});
