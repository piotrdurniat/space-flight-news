import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Foundation from "react-native-vector-icons/Foundation";

// Screens
import ArticlesScreen from "./Articles/ArticlesScreen";
import BlogsScreen from "./Blogs/BlogsScreen";
import ReportsScreen from "./Reports/ReportsScreen";
import LaunchesScreen from "./Launches/LaunchesScreen";

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
            switch (route.name) {
              case launchesName:
                return <Ionicons name="rocket" size={size} color={color} />;
              case articlesName:
                return <MaterialIcons name="article" size={size} color={color} />;
              case blogsName:
                return <Foundation name="social-blogger" size={size} color={color} />;
              case reportsName:
                return <MaterialCommunityIcons name="bell-ring" size={size} color={color} />;
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
