import { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from 'react-native';
import { PRIMARY } from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import BookCard from '../components/BookCard';
import CategoryCard from '../components/CategoryCard';
import { CATEGORIES } from '../constants/api';
import { useBooks } from '../hooks/useBooks';

export default function CategoriesScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { books, loading } = useBooks({ category: selectedCategory });

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const handleBookPress = (book) => {
    const id = book?.id;
    if (id) router.push(`/tabs/(stack)/book/${id}`);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50">
        <AppHeader
          title={`📚 ${selectedCategory}`}
          showBack
          onBack={handleBackToCategories}
        />

        {loading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color={PRIMARY} />
            <Text className="text-gray-500 mt-4 font-roboto">
              Cargando libros...
            </Text>
          </View>
        ) : (
          <FlatList
            key="books-list"
            data={books}
            keyExtractor={(item, index) =>
              item.id?.toString() || index.toString()
            }
            renderItem={({ item }) => (
              <BookCard book={item} onPress={handleBookPress} />
            )}
            contentContainerStyle={{ padding: 16 }}
            ListEmptyComponent={
              <View className="py-20 items-center">
                <Text className="text-gray-400 text-center font-roboto">
                  No hay libros en esta categoría
                </Text>
              </View>
            }
          />
        )}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <AppHeader title="🏷️ Categorías" subtitle="Explora libros por género" />

      <FlatList
        key="categories-grid"
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{ flex: 1, padding: 4 }}>
            <CategoryCard category={item} onPress={handleCategoryPress} />
          </View>
        )}
        numColumns={2}
        contentContainerStyle={{ padding: 8 }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: 4,
        }}
      />
    </SafeAreaView>
  );
}
