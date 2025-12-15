import * as Haptics from 'expo-haptics';
import { Alert, FlatList, Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

export default function CartScreen() {
  const router = useRouter();
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalItems,
  } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Carrito vacío', 'Agrega algunos libros antes de proceder');
      return;
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    Alert.alert(
      '¡Compra Exitosa! 🎉',
      `Has comprado ${getTotalItems()} libro(s)`,
      [
        {
          text: 'Continuar',
          onPress: () => {
            clearCart();
            router.push('/tabs/(stack)/home');
          },
        },
      ]
    );
  };

  const handleClearCart = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);

    Alert.alert(
      'Vaciar Carrito',
      '¿Estás seguro de que quieres eliminar todos los items?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Vaciar',
          style: 'destructive',
          onPress: clearCart,
        },
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <AppHeader
        title="🛒 Mi Carrito"
        subtitle={`${getTotalItems()} ${getTotalItems() === 1 ? 'libro' : 'libros'}`}
        right={
          cartItems.length > 0 ? (
            <Pressable
              onPress={handleClearCart}
              className="bg-red-50 px-4 py-2 rounded-full"
            >
              <Text className="text-red-500 font-semibold font-poppins">
                Vaciar
              </Text>
            </Pressable>
          ) : null
        }
      />

      {cartItems.length === 0 ? (
        <View className="flex-1 justify-center items-center px-6">
          <Text className="text-6xl mb-4 font-poppins">🛒</Text>
          <Text className="text-xl font-bold text-gray-800 mb-2 font-poppins-bold">
            Tu carrito está vacío
          </Text>
          <Text className="text-gray-600 text-center mb-6 font-roboto">
            Explora nuestro catálogo y agrega algunos libros
          </Text>
          <Pressable
            onPress={() => router.push('/tabs/(stack)/home')}
            className="bg-primary rounded-full px-8 py-3"
          >
            <Text className="text-white font-bold font-poppins-bold">
              Explorar Libros
            </Text>
          </Pressable>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id?.toString()}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeFromCart}
              />
            )}
            contentContainerStyle={{ padding: 16 }}
          />

          <View className="bg-white px-6 py-4 border-t border-gray-200">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-semibold text-gray-800 font-roboto">
                Total de items:
              </Text>
              <Text className="text-2xl font-bold text-primary font-poppins-bold">
                {getTotalItems()}
              </Text>
            </View>

            <Pressable
              onPress={handleCheckout}
              className="bg-primary rounded-full py-4 items-center active:bg-primary/90"
            >
              <Text className="text-white font-bold text-lg font-poppins-bold">
                💳 Proceder a Compra
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
