import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/" className="text-blue-400 text-xl mt-9">
          <Pressable>
            {({ pressd }) => <HomeIcon style={{ opacity: pressd ? 0.5 : 1 }} />}
          </Pressable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">
          About the proyect
        </Text>
        <Text className="text-white text-white/90 mb-4">
          This application is an independent project inspired by Metacritic,
          designed to provide a simple and intuitive way to browse, review, and
          rate movies, games, and TV shows. Built with React Native Web, it
          offers a seamless experience across different devices. Whether you're
          looking for critic scores, user reviews, or just discovering new
          content, this platform is free to use, modify, and improve. Our goal
          is to create a space where opinions and recommendations come together,
          helping users make informed decisions about their next favorite
          entertainment experience.
        </Text>
      </ScrollView>
    </Screen>
  );
}
