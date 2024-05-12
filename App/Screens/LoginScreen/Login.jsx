import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../../assets/images/mock.jpg")}
        style={styles.LoginImage}
      />

      <View style={styles.SubContainer}>
        <Text
          style={{
            fontSize: 25,
            color: "#ffffff",
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 20
          }}
        >
          Medi-Clinic-Plus
        </Text>

        <Text style={{ textAlign: "center", fontSize: 25 }}>🩺💉💊</Text>

        <Text
          style={{
            fontSize: 16,
            color: "#fff",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Best App to book Apointment and locate clinics and medicals nearby you
          at one{" "}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#fff",
            textAlign: "center",
          }}
        >
          click👆
        </Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={onPress}
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 20, height: 20, marginRight: 5 }}
              source={require("./../../../assets/images/image.png")}
            />
            <Text style={{ color: "#fff" }}>_.</Text>
            <Text style={{ marginLeft: 5, fontWeight: "bold", fontSize: 20 }}>
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginImage: {
    width: 250,
    height: 300,
    marginTop: 90,
    marginLeft: 50,
  },

  SubContainer: {
    backgroundColor: "#8E3FFF",
    width: 410,
    height: "60%",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 30,
    marginBottom: -130,
  },

  button: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 99,
    marginTop: 50,
  },
});
