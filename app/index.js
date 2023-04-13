import { Link, Stack } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Home",
          headerStyle: { backgroundColor: "#46AD89" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <Link href={{ pathname: "details", params: { name: "Abu" } }}>
        Go To Details
      </Link>

      <Link href="/home/messages">Go to nested route</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
