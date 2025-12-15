import * as Haptics from 'expo-haptics';
import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import { PRIMARY, WHITE } from '../constants/colors';

export default function AboutUsScreen() {
  const handlePress = (action) => {
    console.log(`Acción: ${action}`);
  };

  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView>
        <AppHeader
          title="Nexus"
          subtitle="Librería Universitaria"
          bgColor={PRIMARY}
          titleColor={WHITE}
          subtitleColor={WHITE}
        />

        <View className="bg-white mt-4 px-6 py-6">
          <Text className="text-2xl font-bold text-gray-800 mb-4 font-poppins-bold">
            📖 Sobre nosotros
          </Text>
          <Text className="text-gray-600 leading-6 font-roboto">
            Nexus es tu espacio multifuncional favorito que combina venta de
            libros, zona de coworking y cafetería. Creado especialmente para la
            comunidad universitaria, ofrecemos un ambiente perfecto para
            estudiar, trabajar y disfrutar de un buen libro con un café.
          </Text>
        </View>

        <View className="bg-white mt-4 px-6 py-6">
          <Text className="text-2xl font-bold text-gray-800 mb-4 font-poppins-bold">
            ✨ Nuestros Servicios
          </Text>
          <View className="space-y-4">
            <View className="flex-row items-start mb-4">
              <Text className="text-3xl mr-3 font-poppins">📚</Text>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800 mb-1 font-poppins">
                  Librería
                </Text>
                <Text className="text-gray-600 font-roboto">
                  Amplio catálogo de libros académicos, literatura y más
                </Text>
              </View>
            </View>

            <View className="flex-row items-start mb-4">
              <Text className="text-3xl mr-3 font-poppins">💻</Text>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800 mb-1 font-poppins">
                  Coworking
                </Text>
                <Text className="text-gray-600 font-roboto">
                  Espacios de trabajo colaborativo con WiFi de alta velocidad
                </Text>
              </View>
            </View>

            <View className="flex-row items-start mb-4">
              <Text className="text-3xl mr-3 font-poppins">☕</Text>
              <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800 mb-1 font-poppins">
                  Cafetería
                </Text>
                <Text className="text-gray-600 font-roboto">
                  Café de especialidad, snacks y ambiente acogedor
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="bg-white mt-4 px-6 py-6">
          <Text className="text-2xl font-bold text-gray-800 mb-4 font-poppins-bold">
            🕐 Horarios
          </Text>
          <View className="space-y-2">
            <View className="flex-row justify-between py-2">
              <Text className="text-gray-700 font-roboto">Lunes - Viernes</Text>
              <Text className="text-gray-800 font-semibold font-roboto">
                8:00 AM - 10:00 PM
              </Text>
            </View>
            <View className="flex-row justify-between py-2">
              <Text className="text-gray-700 font-roboto">Sábados</Text>
              <Text className="text-gray-800 font-semibold font-roboto">
                9:00 AM - 9:00 PM
              </Text>
            </View>
            <View className="flex-row justify-between py-2">
              <Text className="text-gray-700 font-roboto">Domingos</Text>
              <Text className="text-gray-800 font-semibold font-roboto">
                10:00 AM - 8:00 PM
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-white mt-4 px-6 py-6">
          <Text className="text-2xl font-bold text-gray-800 mb-4 font-poppins-bold">
            📍 Ubicación
          </Text>
          <Text className="text-gray-600 mb-2 font-roboto">
            Campus Universitario Central
          </Text>
          <Text className="text-gray-600 mb-4 font-roboto">
            Edificio A, Planta Baja
          </Text>
          <Pressable
            onPress={() => handlePress('Ver mapa')}
            className="bg-primary/10 rounded-full py-3 items-center"
          >
            <Text className="text-primary font-semibold font-poppins">
              🗺️ Ver en el Mapa
            </Text>
          </Pressable>
        </View>

        <View className="bg-white mt-4 px-6 py-6 mb-4">
          <Text className="text-2xl font-bold text-gray-800 mb-4 font-poppins-bold">
            📞 Contacto
          </Text>

          <Pressable
            onPress={() => handleOpenLink('tel:+123456789')}
            className="flex-row items-center mb-3"
          >
            <Text className="text-gray-700 text-base font-roboto">
              ☎️ +1 234 567 890
            </Text>
          </Pressable>

          <Pressable
            onPress={() => handleOpenLink('mailto:info@nexus.com')}
            className="flex-row items-center mb-3"
          >
            <Text className="text-gray-700 text-base font-roboto">
              ✉️ info@nexus.com
            </Text>
          </Pressable>

          <Pressable
            onPress={() => handleOpenLink('https://www.nexus.com')}
            className="flex-row items-center"
          >
            <Text className="text-primary text-base font-roboto">
              🌐 www.nexus.com
            </Text>
          </Pressable>
        </View>

        <View className="items-center py-6">
          <Text className="text-gray-400 text-sm font-roboto">
            Nexus © 2024
          </Text>
          <Text className="text-gray-400 text-sm mt-1 font-roboto">
            Versión 1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
