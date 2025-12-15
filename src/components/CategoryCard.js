import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const categoryIcons = {
  Horror: '👻',
  Drama: '🎭',
  Contemporáneo: '📖',
  Ficción: '🌟',
  Romance: '💕',
};

const categoryColors = {
  Horror: 'bg-purple-500',
  Drama: 'bg-blue-500',
  Contemporáneo: 'bg-green-500',
  Ficción: 'bg-yellow-500',
  Romance: 'bg-pink-500',
};

export default function CategoryCard({ category, onPress }) {
  const handlePress = () => {
    onPress(category);
  };

  const icon = categoryIcons[category] || '📚';
  const colorClass = categoryColors[category] || 'bg-gray-500';

  return (
    <Pressable
      onPress={handlePress}
      className={`${colorClass} rounded-2xl p-4 shadow-lg active:opacity-80`}
      style={({ pressed }) => [
        pressed && styles.pressed,
        {
          flex: 1,
          aspectRatio: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      <View className="items-center">
        <Text className="text-4xl font-poppins">{icon}</Text>
        <Text
          className="text-white font-bold text-base text-center font-poppins-bold mt-2"
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {category}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
});
