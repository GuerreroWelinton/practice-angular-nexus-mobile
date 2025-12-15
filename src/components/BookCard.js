import * as Haptics from 'expo-haptics';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function BookCard({ book, onPress }) {
  const handlePress = () => {
    onPress(book);
  };

  return (
    <Pressable
      onPress={handlePress}
      className="bg-white rounded-xl shadow-md mb-4 overflow-hidden active:opacity-80"
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <View className="flex-row">
        <Image
          source={{ uri: book.imagen }}
          className="w-24 h-32"
          resizeMode="cover"
        />

        <View className="flex-1 p-3 justify-between">
          <View>
            <Text
              className="text-lg font-bold text-gray-800 mb-1 font-poppins-bold"
              numberOfLines={2}
            >
              {book.nombre}
            </Text>
            <Text
              className="text-sm text-gray-600 mb-2 font-roboto"
              numberOfLines={1}
            >
              {book.autor}
            </Text>
          </View>

          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Text className="text-xs text-gray-500 mr-2 font-roboto">
                ⭐ {book.votos}
              </Text>
              <Text className="text-xs text-gray-500 font-roboto">
                📅 {book.año}
              </Text>
            </View>

            <View className="bg-primary/10 px-2 py-1 rounded">
              <Text className="text-xs text-primary font-semibold font-roboto">
                {book.categoria}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
});
