import { View, Text } from "react-native";

export function Genre({ genre }) {
  const getColors = (genre) => {
    const genreColors = {
      MMORPG: "bg-blue-500",
      Shooter: "bg-red-500",
      Strategy: "bg-green-500",
      "Action RPG": "bg-yellow-500",
      "Battle Royale": "bg-purple-500",
      ARPG: "bg-orange-500",
    };

    return genreColors[genre] || "bg-gray-500"; // Default color if genre is not found
  };

  const backgroundColor = getColors(genre);

  return (
    <View
      className={`rounded-full px-4 w-36 h-8 justify-center items-center ${backgroundColor}`}
    >
      <Text className="text-lg font-bold text-white">{genre}</Text>
    </View>
  );
}
