import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { PRIMARY } from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import { addToCart as addToCartAPI, getBookById } from '../api/books';
import { useCart } from '../context/CartContext';

export default function BookDetailScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const id = params?.id;
  const [book, setBook] = useState(null);
  const [loadingBook, setLoadingBook] = useState(!!id);
  const { addToCart } = useCart();

  useEffect(() => {
    let mounted = true;
    if (!book && id) {
      setLoadingBook(true);
      getBookById(id)
        .then((data) => {
          if (mounted) setBook(data);
        })
        .catch((err) => console.log('Error cargando libro por id:', err))
        .finally(() => mounted && setLoadingBook(false));
    }
    return () => (mounted = false);
  }, [id]);

  const handleAddToCart = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    try {
      addToCart(book);

      try {
        await addToCartAPI(book);
      } catch (apiError) {
        console.log('Error API (no crítico):', apiError);
      }

      Alert.alert('¡Agregado! 🎉', `"${book.nombre}" se agregó al carrito`, [
        { text: 'OK' },
      ]);
    } catch (error) {
      Alert.alert('Error', 'No se pudo agregar al carrito');
    }
  };

  const handleBuyNow = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    addToCart(book);

    Alert.alert('¡Compra realizada! 🛒', `Has comprado "${book.nombre}"`, [
      {
        text: 'Ver Carrito',
        onPress: () => router.push('/tabs/cart'),
      },
      { text: 'Seguir Comprando' },
    ]);
  };

  if (loadingBook) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color={PRIMARY} />
      </SafeAreaView>
    );
  }

  if (!book) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text className="text-gray-600 font-roboto">
          No se encontró el libro
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <AppHeader showBack title={book.nombre} />

      <ScrollView>
        <View className="items-center py-6 bg-gray-50">
          <Image
            source={{ uri: book.imagen }}
            className="w-48 h-72 rounded-lg shadow-lg"
            resizeMode="cover"
          />
        </View>

        <View className="px-6 py-4">
          <Text className="text-3xl font-bold text-gray-800 mb-2 font-poppins-bold">
            {book.nombre}
          </Text>

          <Text className="text-lg text-gray-600 mb-4 font-roboto">
            por {book.autor}
          </Text>

          <View className="flex-row flex-wrap gap-3 mb-6">
            <View className="bg-primary/10 px-4 py-2 rounded-full">
              <Text className="text-primary font-semibold font-roboto">
                📚 {book.categoria}
              </Text>
            </View>

            <View className="bg-secondary/10 px-4 py-2 rounded-full">
              <Text className="text-secondary font-semibold font-roboto">
                📅 {book.año}
              </Text>
            </View>

            <View className="bg-accent/10 px-4 py-2 rounded-full">
              <Text className="text-accent font-semibold font-roboto">
                ⭐ {book.votos} votos
              </Text>
            </View>
          </View>

          <View className="mb-6">
            <Text className="text-xl font-bold text-gray-800 mb-2 font-poppins-bold">
              Acerca de este libro
            </Text>
            <Text className="text-gray-600 leading-6 font-roboto">
              Este libro pertenece a la categoría de {book.categoria} y ha sido
              valorado por {book.votos} lectores. Publicado en {book.año}, es
              una excelente adición a tu biblioteca personal.
            </Text>
          </View>

          {book.url && (
            <Pressable
              onPress={() =>
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
              }
              className="mb-6"
            >
              <Text className="text-primary underline font-roboto">
                Ver más información →
              </Text>
            </Pressable>
          )}
        </View>
      </ScrollView>

      <View className="px-6 py-4 bg-white border-t border-gray-200">
        <View className="flex-row gap-3">
          <Pressable
            onPress={handleAddToCart}
            className="flex-1 bg-white border-2 border-primary rounded-full py-4 items-center active:bg-primary/10"
          >
            <Text className="text-primary font-bold text-base font-poppins-bold">
              🛒 Agregar al Carrito
            </Text>
          </Pressable>

          <Pressable
            onPress={handleBuyNow}
            className="flex-1 bg-primary rounded-full py-4 items-center active:bg-primary/90"
          >
            <Text className="text-white font-bold text-base font-poppins-bold">
              💳 Comprar Ahora
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
