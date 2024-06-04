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
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import doc from "../../assets/docs.png";
import wave from "../../assets/wave.png";
import * as Progress from "react-native-progress";
import Dropdown from "../../components/dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function AdminHome() {
  const [searchTerm, setSearchTerm] = useState("");

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
          <Text style={styles.texts}>Welcome Supervisor!</Text>
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
            IAttach
          </Text>
          <Text
            style={[
              styles.texts,
              {
                fontSize: 20,
                textAlign: "center",
                color: "#8E8E8E",
                marginLeft: "1%",
                marginTop: "-3%",
                marginBottom: "1%",
              },
            ]}
          >
            IAttach gives you access to your assigned students' logbooks and
            companies of attachment.
          </Text>
        </View>
        <View style={{ height: 1200, marginBottom: "-50%" }}>
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
            Students to be Supervised
          </Text>
          <TextInput
            style={[styles.searchInput, {marginBottom:38}]}
            placeholder="Search by location"
            onChangeText={(text) => setSearchTerm(text)}
            value={searchTerm}
          />
   <TouchableHighlight
  underlayColor="#DDDDDD"
  style={styles.profile}
  onPress={() => {
    // Handle press event if needed
  }}
>
  <>
    <Image
      alt=""
      source={{
        uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
      }}
      style={styles.profileAvatar}
    />
    <View>
      <Text style={styles.profileName}>Roland Gilbert</Text>
      <Text style={styles.profileHandle}>roland.gilbert@mail.com</Text>
    </View>
  </>
</TouchableHighlight>
<TouchableHighlight
  underlayColor="#DDDDDD"
  style={styles.profile}
  onPress={() => {
    // Handle press event if needed
  }}
>
  <>
    <Image
      alt=""
      source={{
        uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
      }}
      style={styles.profileAvatar}
    />
    <View>
      <Text style={styles.profileName}>Roland Gilbert</Text>
      <Text style={styles.profileHandle}>roland.gilbert@mail.com</Text>
    </View>
  </>
</TouchableHighlight>
<TouchableHighlight
  underlayColor="#DDDDDD"
  style={styles.profile}
  onPress={() => {
    // Handle press event if needed
  }}
>
  <>
    <Image
      alt=""
      source={{
        uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
      }}
      style={styles.profileAvatar}
    />
    <View>
      <Text style={styles.profileName}>Roland Gilbert</Text>
      <Text style={styles.profileHandle}>roland.gilbert@mail.com</Text>
    </View>
  </>
</TouchableHighlight>
<TouchableHighlight
  underlayColor="#DDDDDD"
  style={styles.profile}
  onPress={() => {
    // Handle press event if needed
  }}
>
  <>
    <Image
      alt=""
      source={{
        uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
      }}
      style={styles.profileAvatar}
    />
    <View>
      <Text style={styles.profileName}>Roland Gilbert</Text>
      <Text style={styles.profileHandle}>roland.gilbert@mail.com</Text>
    </View>
  </>
</TouchableHighlight>
<TouchableHighlight
  underlayColor="#DDDDDD"
  style={styles.profile}
  onPress={() => {
    // Handle press event if needed
  }}
>
  <>
    <Image
      alt=""
      source={{
        uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
      }}
      style={styles.profileAvatar}
    />
    <View>
      <Text style={styles.profileName}>Roland Gilbert</Text>
      <Text style={styles.profileHandle}>roland.gilbert@mail.com</Text>
    </View>
  </>
</TouchableHighlight>
<TouchableHighlight
  underlayColor="#DDDDDD"
  style={styles.profile}
  onPress={() => {
    // Handle press event if needed
  }}
>
  <>
    <Image
      alt=""
      source={{
        uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
      }}
      style={styles.profileAvatar}
    />
    <View>
      <Text style={styles.profileName}>Roland Gilbert</Text>
      <Text style={styles.profileHandle}>roland.gilbert@mail.com</Text>
    </View>
  </>
</TouchableHighlight>
<TouchableHighlight
  underlayColor="#DDDDDD"
  style={styles.profile}
  onPress={() => {
    // Handle press event if needed
  }}
>
  <>
    <Image
      alt=""
      source={{
        uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
      }}
      style={styles.profileAvatar}
    />
    <View>
      <Text style={styles.profileName}>Roland Gilbert</Text>
      <Text style={styles.profileHandle}>roland.gilbert@mail.com</Text>
    </View>
  </>
</TouchableHighlight>
<TouchableHighlight
  underlayColor="#DDDDDD"
  style={styles.profile}
  onPress={() => {
    // Handle press event if needed
  }}
>
  <>
    <Image
      alt=""
      source={{
        uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
      }}
      style={styles.profileAvatar}
    />
    <View>
      <Text style={styles.profileName}>Roland Gilbert</Text>
      <Text style={styles.profileHandle}>roland.gilbert@mail.com</Text>
    </View>
  </>
</TouchableHighlight>
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
  searchInput: {
    height: 40,
    width:300,
    borderColor: "blue",
    borderWidth: 1,
    marginLeft: "5%",
    marginRight: "8%",
    paddingLeft: "5%",
    borderRadius: 18,
    marginBottom: "20%",
  },
  profile: {
    padding: 12,
    paddingLeft:30,
    paddingBottom:20,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginRight: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#292929',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    height:50,
    width:150,
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
