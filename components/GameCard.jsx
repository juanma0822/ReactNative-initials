import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { useEffect, useRef } from "react";

export function GameCard({ game }) {
  return (
    <View key={game.id} style={styles.card}>
      <Image source={{ uri: game.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.genre}>{game.genre}</Text>
      <Text style={styles.description}>{game.short_description}</Text>
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
