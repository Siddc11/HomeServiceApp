import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Login() {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../../assets/images/mock.jpg")}
        style={styles.LoginImage}
      />

      <View style={styles.SubContainer}>
        <Text style={{ fontSize: 25, color: "#ffffff", textAlign: "center" }}>
          Lets Find
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            professional cleaning and repair
          </Text>{" "}
          service
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#fff",
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Best App to find services nearby you at one     click👆
        </Text>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={()=> console.log("Button Pressed")}
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
            <Text style={{ marginLeft: 5 , fontWeight:'bold', fontSize:20}}>Continue with Google</Text>
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
    height: "50%",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 30,
  },

  button: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 99,
    marginTop: 35,
  },
});
