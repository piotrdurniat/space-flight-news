import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation";

// Screens
import ArticlesScreen from "./Articles/ArticlesScreen";
import BlogsScreen from "./BlogsScreen";
import ReportsScreen from "./Reports/ReportsScreen";
import LaunchesScreen from "./LaunchesScreen";
import { View } from "react-native";

//Screen names
const launchesName = "Launches";
const articlesName = "Articles";
const blogsName = "Blogs";
const reportsName = "Reports";

const Tab = createBottomTabNavigator();

function NavigationBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={launchesName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ _, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === launchesName) {
              iconName = "rocket";
              return <Ionicons name={iconName} size={size} color={color} />;
            } else if (rn === articlesName) {
              iconName = "article";
              return <MaterialIcons name={iconName} size={size} color={color} />;
            } else if (rn === blogsName) {
              iconName = "social-blogger";
              return <Foundation name={iconName} size={size} color={color} />;
            } else if (rn === reportsName) {
              iconName = "bell-ring";
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { height: 50 },
          tintColor: "#00241A",
          tabBarActiveBackgroundColor: "#00241A",
          tabBarInactiveBackgroundColor: "#00241A",
          headerShown: false,
        })}
      >
        <Tab.Screen name={launchesName} component={LaunchesScreen} />
        <Tab.Screen name={articlesName} component={ArticlesScreen} />
        <Tab.Screen name={blogsName} component={BlogsScreen} />
        <Tab.Screen name={reportsName} component={ReportsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationBar;
