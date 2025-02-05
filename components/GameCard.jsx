import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { useEffect, useRef } from "react";
import "../global.css";
import { Genre } from "./Genre";

export function GameCard({ game }) {
  return (
    <View
      className="flex-row bg-slate-500/10 p-4 rounded-xl gap-4 mb-10"
      key={game.id}
    >
      <Image source={{ uri: game.thumbnail }} style={styles.image} />
      <View>
        <Text className="mb-1" style={styles.title}>
          {game.title}
        </Text>
        <Genre genre={game.genre} />
        <Text className="mt-2 flex-shrink" style={styles.description}>
          {game.short_description.slice(0, 100)}...
        </Text>
      </View>
    </View>
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
  card: {
    marginBottom: 48,
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
