import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Link from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"; // Import correctly
import { useEffect } from "react";

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw new Error(error); // Fix typo here
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Open up App.js </Text>
      <StatusBar style="auto" />
      <Link href="/profile"  > {/* Fix color syntax */}
        Go to Profile
      </Link>
    </View>
  );
};

export default function App() {
  return <RootLayout />;
}

