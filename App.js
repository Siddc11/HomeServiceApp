import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={
        "pk_test_dm9jYWwtZ3JvdXBlci05LmNsZXJrLmFjY291bnRzLmRldiQ "
      }
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {/* Sign in Component */}
          <SignedIn style={{ flex: 1 }}>
            <NavigationContainer>
              <TabNavigation />
            </NavigationContainer>
          </SignedIn>

          {/* Sign out component */}
          <SignedOut style={{ flex: 1 }}>
            <Login />
          </SignedOut>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </ClerkProvider>
  );
}
