import { View, Link, Pressable, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Logo } from "../components/Logo";
import { InfoIcon } from "../components/Icons";

export default function Layout() {
  const router = useRouter(); // Hook para manejar la navegación

  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Pressable
              onPress={() => router.push("/about")}
              className="rounded-xl bg-indigo-400 w-10 items-center justify-center"
            >
              <InfoIcon />
            </Pressable>
          ),
        }}
      />
    </View>
  );
}
