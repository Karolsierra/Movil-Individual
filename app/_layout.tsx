import { SplashScreen,Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout=() =>{
    const[fontsLoaded, error] = useFonts({
      "Poppins-black": require ("../assets/fonts/Poppins-Black.ttf"),
      "Poppins-bold": require ("../assets/fonts/Poppins-Bold.ttf"),
      "Poppins-extraBold": require ("../assets/fonts/Poppins-ExtraBold.ttf"),
      "Poppins-extraLight": require ("../assets/fonts/Poppins-ExtraLight.ttf"),
      "Poppins-light": require ("../assets/fonts/Poppins-Light.ttf"),
      "Poppins-medium": require ("../assets/fonts/Poppins-Medium.ttf"),
      "Poppins-regular": require ("../assets/fonts/Poppins-Regular.ttf"),
      "Poppins-semibold": require ("../assets/fonts/Poppins-Semibold.ttf"),
      "Poppins-thin": require ("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() =>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded,error])

  if(!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
    </Stack>
  );
}

export default RootLayout