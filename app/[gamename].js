import { Link, Stack } from "expo-router";
import { Text, View, ActivityIndicator, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getLatestGames } from "../lib/metacritic";
import { Genre } from "../components/Genre";

export default function Detail() {
  const { gamename } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gamename) {
      getLatestGames().then((games) => {
        const game = games.find((g) => g.title === gamename);
        setGameInfo(game);
      });
    }
  }, [gamename]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: gamename,
          headerRight: () => {},
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.thumbnail }}
                style={{ width: 214, height: 294 }}
              ></Image>
              <Genre genre={gameInfo.genre} />
              <Text className="text-white font-bold text-2xl text-center">
                {gameInfo.title}
              </Text>
              <Text className="text-white/70 mt-4 font-bold mb-8 text-left text-base">
                {gameInfo.short_description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
