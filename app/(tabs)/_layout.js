import { Tabs } from "expo-router";
import { View } from "react-native";

import { HomeIcon, Icon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "yellow" },
        tabBarActiveTintColor: "black",
        headerTransparent: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <Icon color={color} />,
        }}
      />
    </Tabs>
  );
}
