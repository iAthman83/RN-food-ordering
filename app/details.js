import { useRouter, Stack, useSearchParams } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

const Details = (props) => {
  const router = useRouter();
  const params = useSearchParams();
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name,
          headerStyle: {
            backgroundColor: "#F9B03A",
          },
        }}
      />
      <Text
        onPress={() => {
          router.setParams({ name: "Athman" });
        }}
      >
        Update Params
      </Text>
      <Text
        onPress={() => {
          router.back();
        }}
      >
        Details Screen
      </Text>
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

export default Details;
