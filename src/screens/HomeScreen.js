import { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PRIMARY, GRAY_400 } from '../constants/colors';
import AppHeader from '../components/AppHeader';
import BookCard from '../components/BookCard';
import { YEARS } from '../constants/api';
import { useBooks } from '../hooks/useBooks';

export default function HomeScreen() {
  const router = useRouter();
  const [selectedYear, setSelectedYear] = useState(null);
  const [searchText, setSearchText] = useState('');
  const { books, loading, error } = useBooks({ year: selectedYear });

  const filteredBooks = books.filter((book) => {
    if (!searchText) return true;
    return (
      book.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
      book.autor.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const handleBookPress = (book) => {
    const id = book?.id;
    if (id) router.push(`/tabs/(stack)/book/${id}`);
  };

  const renderYearFilter = () => (
    <View className="flex-row mb-4 px-4">
      <Pressable
        onPress={() => setSelectedYear(null)}
        className={`px-4 py-2 rounded-full mr-2 ${
          !selectedYear ? 'bg-primary' : 'bg-gray-200'
        }`}
      >
        <Text
          className={`${
            !selectedYear ? 'text-white' : 'text-gray-700'
          } font-semibold`}
        >
          Todos
        </Text>
      </Pressable>
      {YEARS.map((year) => (
        <Pressable
          key={year}
          onPress={() => setSelectedYear(year)}
          className={`px-4 py-2 rounded-full mr-2 ${
            selectedYear === year ? 'bg-primary' : 'bg-gray-200'
          }`}
        >
          <Text
            className={`${
              selectedYear === year ? 'text-white' : 'text-gray-700'
            } font-semibold`}
          >
            {year}
          </Text>
        </Pressable>
      ))}
    </View>
  );

  if (error) {
    return (
      <SafeAreaView className="flex-1 bg-gray-50 justify-center items-center">
        <Text className="text-red-500 text-center px-4 font-roboto">
          Error al cargar los libros: {error}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <AppHeader title="📚 Catálogo de Libros">
        <View className="bg-gray-100 rounded-full px-4 py-3 flex-row items-center">
          <Text className="text-gray-400 mr-2 font-poppins">🔍</Text>
          <TextInput
            className="flex-1 text-gray-800 font-roboto"
            placeholder="Buscar por título o autor..."
            placeholderTextColor={GRAY_400}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </AppHeader>

      <View className="mt-4">{renderYearFilter()}</View>

      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color={PRIMARY} />
          <Text className="text-gray-500 mt-4 font-roboto">
            Cargando libros...
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredBooks}
          keyExtractor={(item, index) =>
            item.id?.toString() || index.toString()
          }
          renderItem={({ item }) => (
            <BookCard book={item} onPress={handleBookPress} />
          )}
          contentContainerStyle={{ padding: 16, paddingTop: 0 }}
          ListEmptyComponent={
            <View className="py-20 items-center">
              <Text className="text-gray-400 text-center font-roboto">
                No se encontraron libros
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}
