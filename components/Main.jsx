import { useEffect, useState } from "react";
import { Link } from "expo-router";

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, GameCard } from "./GameCard";
import { Logo } from "./Logo";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  });
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View
        style={{ marginBottom: 20, backgroundColor: "grey", borderRadius: 10 }}
      >
        <Logo />
      </View>
      <Link href="/about" className="text-blue-400 text-xl">
        Ir al about
      </Link>
      {games.length === 0 ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.id}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
