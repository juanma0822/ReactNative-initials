import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { useEffect, useRef } from "react";
import "../global.css";
import { Genre } from "./Genre";
import { Link } from "expo-router";

export function GameCard({ game }) {
  return (
    <Link href={`/${game.title}`} asChild>
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.7 : 1,
            borderWidth: pressed ? 1 : 0,
            borderColor: pressed ? "black" : "black",
            borderRadius: 10,
            padding: 10,
            marginBottom: 8,
          },
          styles.pressable,
        ]}
        className="mb-2 rounded-xl p-4"
      >
        <View className="flex-row gap-4" key={game.id}>
          <Image source={{ uri: game.thumbnail }} style={styles.image} />
          <View className="flex-shrink">
            <Text className="mb-1" style={styles.title}>
              {game.title}
            </Text>
            <Genre genre={game.genre} />
            <Text className="mt-2 flex-shrink" style={styles.description}>
              {game.short_description.slice(0, 100)}...
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
  },
  image: {
    width: 107,
    height: 127,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    color: "white",
    fontSize: 12,
  },
  genre: {
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
  },
});
