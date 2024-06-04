import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  AboutPage,
  BiometricAuthPage,
  Docs,
  EditProfileScreen,
  EmergencyContactsPage,
  HelpAndSupportPage,
  Home,
  Landing,
  LoginForm,
  MyAccountScreen,
  ProfileScreen,
  Resources,
  TwoFactorAuthPage,
  registrationForm,
} from "./screens";
import { AdminDocs, AdminHome, AdminResources, DocView } from "./adminScreens";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const landingStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginForm} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={registrationForm} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const mainScreens = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="home"
      component={Home}
      options={{
        title: "home",
        headerShown: false,
        tabBarIcon: ({ color, size }) => <AntDesign name="home" size={24} color="blue" />,
      }}
    />
    <Tab.Screen
      name="docs"
      component={Docs}
      options={{
        title: "docs",
        headerShown: false,
        tabBarIcon: ({ color, size }) => <SimpleLineIcons name="docs" size={24} color="blue" />,
      }}
    />
    <Tab.Screen
      name="resources"
      component={Resources}
      options={{
        title: "resources",
        headerShown: false,
        tabBarIcon: ({ color, size }) => <SimpleLineIcons name="drawer" size={24} color="blue" />,
      }}
    />
    <Tab.Screen
      name="profile"
      component={ProfileStack}
      options={{
        title: "profile",
        headerShown: false,
        tabBarIcon: ({ color, size }) => <AntDesign name="user" size={24} color="blue" />,
      }}
    />
  </Tab.Navigator>
);

const AdminDocsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="admin-docs" component={AdminDocs} options={{ headerShown: false }} />
    <Stack.Screen name="docs viewer" component={DocView} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AdminStack = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="home"
      component={AdminHome}
      options={{
        title: "home",
        headerShown: false,
        tabBarIcon: ({ color, size }) => <AntDesign name="home" size={24} color="blue" />,
      }}
    />
    <Tab.Screen
      name="docs"
      component={AdminDocsStack}
      options={{
        title: "docs",
        headerShown: false,
        tabBarIcon: ({ color, size }) => <SimpleLineIcons name="docs" size={24} color="blue" />,
      }}
    />
    <Tab.Screen
      name="resources"
      component={AdminResources}
      options={{
        title: "resources",
        headerShown: false,
        tabBarIcon: ({ color, size }) => <SimpleLineIcons name="drawer" size={24} color="blue" />,
      }}
    />
    <Tab.Screen
      name="profile"
      component={ProfileStack}
      options={{
        title: "profile",
        headerShown: false,
        tabBarIcon: ({ color, size }) => <AntDesign name="user" size={24} color="blue" />,
      }}
    />
  </Tab.Navigator>
);

const MainApp = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Landing" component={landingStack} options={{ headerShown: false }} />
    <Stack.Screen name="mainScreen" component={mainScreens} options={{ headerShown: false }} />
    <Stack.Screen name="adminScreen" component={AdminStack} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile Page" component={ProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Edit Profile" component={EditProfileScreen} options={{ title: "Edit Profile" }} />
    <Stack.Screen name="Account Screen" component={MyAccountScreen} options={{ title: "My Account" }} />
    <Stack.Screen name="About Screen" component={AboutPage} options={{ title: "About Us" }} />
    <Stack.Screen name="Help Screen" component={HelpAndSupportPage} options={{ title: "Help and Support" }} />
    <Stack.Screen name="Two Factor Authentication" component={TwoFactorAuthPage} options={{ title: "Two Factor Authentication" }} />
    <Stack.Screen name="Biometric Authentication" component={BiometricAuthPage} options={{ title: "Biometric Authentication" }} />
    <Stack.Screen name="Emergency Contacts" component={EmergencyContactsPage} options={{ title: "Notifications" }} />
  </Stack.Navigator>
);

const App = () => (
  <SafeAreaView style={globalStyles.container}>
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  </SafeAreaView>
);

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
});

export default App;
