import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';


MaterialIcons
// Screens
import ArticlesScreen from "./ArticlesScreen";
import BlogsScreen from "./BlogsScreen";
import ReportsScreen from "./ReportsScreen";
import LaunchesScreen from "./LaunchesScreen";

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
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === launchesName) {
                            iconName = focused ? 'rocket' : 'rocket';
                            return <Ionicons name={iconName} size={size} color={color} />;
                        } else if (rn === articlesName) {
                            iconName = focused ? 'article' : 'article';
                            return <MaterialIcons name={iconName} size={size} color={color}/>;
                        } else if (rn === blogsName) {
                            iconName = focused ? 'social-blogger' : 'social-blogger';
                            return <Foundation name={iconName} size={size} color={color} />;
                        } else if (rn === reportsName) {
                            iconName = focused ? 'bell-ring' : 'bell-ring';
                            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                        }

                    },
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "grey",
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarStyle: { height: 50},
                    tintColor: '#00241A',
                    tabBarActiveBackgroundColor: '#00241A',
                    tabBarInactiveBackgroundColor: '#00241A',
                    contentStyle:{
                        backgroundColor:'#00241A'
                    },
                    cardStyle: { backgroundColor: '#00241A' }

                })
            }>
                <Tab.Screen style = {{backgroundColor: '#00241A'}}name={launchesName} component={LaunchesScreen} />
                <Tab.Screen name={articlesName} component={ArticlesScreen} />
                <Tab.Screen name={blogsName} component={BlogsScreen} />
                <Tab.Screen name={reportsName} component={ReportsScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default NavigationBar;