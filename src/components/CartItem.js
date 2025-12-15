import * as Haptics from 'expo-haptics';
import { Image, Pressable, Text, View } from 'react-native';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const handleDecrease = () => {
    onUpdateQuantity(item.id, item.quantity - 1);
  };

  const handleIncrease = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <View className="bg-white rounded-xl shadow-md mb-4 p-4">
      <View className="flex-row">
        <Image
          source={{ uri: item.imagen }}
          className="w-20 h-28 rounded-lg"
          resizeMode="cover"
        />

        <View className="flex-1 ml-4">
          <View className="flex-1">
            <Text
              className="text-lg font-bold text-gray-800 mb-1 font-poppins-bold"
              numberOfLines={2}
            >
              {item.nombre}
            </Text>
            <Text
              className="text-sm text-gray-600 font-roboto"
              numberOfLines={1}
            >
              {item.autor}
            </Text>
          </View>

          <View className="flex-row items-center justify-between mt-2">
            <View className="flex-row items-center bg-gray-100 rounded-full">
              <Pressable
                onPress={handleDecrease}
                className="w-8 h-8 justify-center items-center"
              >
                <Text className="text-xl text-gray-700 font-bold font-poppins-bold">
                  −
                </Text>
              </Pressable>

              <View className="w-10 items-center">
                <Text className="text-base font-bold text-gray-800 font-poppins-bold">
                  {item.quantity}
                </Text>
              </View>

              <Pressable
                onPress={handleIncrease}
                className="w-8 h-8 justify-center items-center"
              >
                <Text className="text-xl text-gray-700 font-bold font-poppins-bold">
                  +
                </Text>
              </Pressable>
            </View>

            <Pressable
              onPress={handleRemove}
              className="bg-red-50 px-3 py-2 rounded-full"
            >
              <Text className="text-red-500 font-semibold font-poppins">
                🗑️ Eliminar
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
