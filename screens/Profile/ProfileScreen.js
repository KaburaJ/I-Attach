import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../AuthContext";
import { ActivityIndicator } from "react-native-paper";
import wave from "../../assets/wave.png";
import doc from "../../assets/docs.png";

export default function ProfileScreen() {

  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()

  return (
    <>
      {loading ? (
        <View style={[styles.mainContainer, styles.loadingContainer]}>
          <ActivityIndicator size="large" color="green" />
        </View>
      ) : (
    <ScrollView>
      <View style={[styles.mainContainer]}>
      <ImageBackground
          source={wave}
          style={{
            backgroundColor: "blue",
            objectFit: "cover",
            width: "100%",
            marginTop: ".01%",
          }}
        >
          <Text style={styles.texts}>Profile</Text>
        </ImageBackground>
        <View>
          <View style={[styles.container]}>
            <AntDesign name="user" style={[styles.icon, { fontSize: 34 }]} />
            <View>
              <Text
                style={[
                  styles.name,
                  { fontWeight: "bold", fontSize: 22, marginBottom: 4 },
                ]}
              >
                John
              </Text>
              <Text style={[styles.name, { fontSize: 16, marginTop: -1 }]}>
                john@gmail.com
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons
                name="pencil"
                style={{display:"none"}}
                onPress={() => navigation.push("Edit Profile")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyAlignment}>
            <TouchableOpacity>
              <View
                style={[
                  styles.midContainer,
                  {
                    marginTop: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  },
                ]}
              >
                <View style={[styles.details]}>
                  <AntDesign
                    name="user"
                    style={[styles.icon, { color: "#000" }]}
                  />
                  <View style={[styles.detail]}>
                    <Text
                      style={[styles.tags]}
                      onPress={() => navigation.push("Account Screen")}
                    >
                      My Account
                    </Text>
                    <Text style={[styles.tag]}>
                      Make changes to your accounts
                    </Text>
                  </View>
                  <Ionicons
                    name="chevron-back-outline"
                    style={[styles.containerBackIcon]}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View style={[styles.midContainer]}>
              <View style={[styles.details]}>
                <AntDesign
                  name="lock"
                  style={[styles.icon, { color: "#000", fontSize: 22 }]}
                />
                <View style={[styles.detail]}>
                  <Text
                    onPress={() => navigation.push("Emergency Contacts")}
                    style={[styles.tags, { marginLeft: -55 }]}
                  >
                    My Notifications
                  </Text>
                  <Text style={[styles.tag, { marginLeft: -53 }]}>
                    App notifications viewing
                  </Text>
                </View>
                <Ionicons
                  name="chevron-back-outline"
                  style={styles.containerBackIcon}
                />
              </View>
            </View>
            <View
              style={[
                styles.midContainer,
                { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
              ]}
            >
              <View style={[styles.details]}>
                <AntDesign
                  name="logout"
                  style={[styles.icon, { color: "#000" }]}
                />
                <View style={[styles.detail]}>
                  <Text
                    style={[styles.tags, { marginLeft: -95 }]}
                  >
                    Log out
                  </Text>
                  <Text style={[styles.tag, { marginLeft: -95 }]}>
                    Logging out mode
                  </Text>
                </View>
                <Ionicons
                  name="chevron-back-outline"
                  style={styles.containerBackIcon}
                />
              </View>
            </View>
            <Text style={[styles.tags, { paddingLeft: 13, marginTop: 22 }]}>
              More
            </Text>
            <View
              style={[
                styles.midContainer,
                {
                  marginTop: 22,
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                },
              ]}
            >
              <View style={[styles.details]}>
                <Ionicons
                  name="help-circle"
                  style={[styles.icon, { color: "#000" }]}
                />
                <View style={[styles.detail]}>
                  <Text
                    style={[styles.tags, { marginLeft: -100, marginTop: 9 }]}
                    onPress={() => navigation.push("Help Screen")}
                  >
                    Help & Support
                  </Text>
                </View>
                <Ionicons
                  name="chevron-back-outline"
                  style={[styles.containerBackIcon, { marginTop: 15 }]}
                />
              </View>
            </View>
            <View
              style={[
                styles.midContainer,
                {
                  marginBottom: 18,
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                },
              ]}
            >
              <View style={[styles.details]}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  style={[styles.icon, { color: "#000" }]}
                />
                <TouchableOpacity>
                  <View style={[styles.detail]}>
                    <Text
                      style={[styles.tags, { marginLeft: -100, marginTop: 9 }]}
                      onPress={() => navigation.push("About Screen")}
                    >
                      About App
                    </Text>
                  </View>
                </TouchableOpacity>
                <Ionicons
                  name="chevron-back-outline"
                  style={[styles.containerBackIcon, { marginTop: 15 }]}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
      )}
      </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    backgroundColor: "#F5F5F5",
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    gap: 62,
    width: "95%",
    height: 130,
    marginTop: "-15%",
    margin: 12,
    padding: 18,
    justifyContent: "space-between",
    color:"#8E8E8E",
    borderRadius: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
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
    marginLeft: 20,
  },
  image: {
    objectFit: "contain",
    width:500,
    height:500,
    marginTop:"-20%",
  },
  name: {
    display: "flex",
    flexDirection: "column",
    marginLeft: -104,
    marginTop: 16,
    color: "#8E8E8E",
  },
  icon: {
    marginTop: 20,
    color: "#8E8E8E",
    fontSize: 24,
  },
  midContainer: {
    width: "98.5%",
    marginBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#BECBF9",
    backgroundColor: "#FFF",
    boxShadow: "0 4 4 0 rgba(0, 0, 0, 0.25)",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
  },
  detail: {
    display: "flex",
    flexDirection: "column",
  },
  tags: {
    display: "flex",
    flexDirection: "column",
    color: "#000",
    fontSize: 16,
    marginBottom: 8,
  },
  tag: {
    display: "flex",
    flexDirection: "column",
    color: "#ABABAB",
    fontSize: 14,
  },
  debug: {
    borderWidth: 2,
    borderStyle: "solid",
  },
  bodyAlignment: {
    margin: 12,
  },
});
