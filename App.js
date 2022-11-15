import { useEffect, useCallback } from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import NavigationBar from "./components/NavigationBar";
import {colors} from "./assets/colors/colors";
export default function App() {
    const [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/fonts/Oxygen-Bold.ttf'),
    });
    const image = { uri: "https://reactjs.org/logo-og.png" };

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
               <NavigationBar style={styles.image}/>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: "#000000c0",

    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        backgroundColor: "#000000c0",
    }
});