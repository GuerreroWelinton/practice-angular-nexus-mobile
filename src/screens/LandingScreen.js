import * as Haptics from 'expo-haptics';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import logo from '../../assets/images/logo.png';
import { PRIMARY, BLACK } from '../constants/colors';

export default function LandingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6">
        <View className="mb-6 items-center">
          <View style={styles.logoWrapper}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </View>
          <Text className="text-primary text-5xl font-poppins-bold text-center tracking-tight mt-4">
            Nexus
          </Text>
          <Text className="text-black text-lg font-poppins text-center mt-1">
            Librería Universitaria
          </Text>
          <Text className="text-black/70 text-sm font-poppins text-center mt-2 max-w-xs">
            Tu espacio para comprar libros, trabajar y compartir.
          </Text>
        </View>

        <Pressable
          onPress={() => router.replace('/tabs/(stack)/home')}
          className="bg-primary rounded-full px-8 py-3"
        >
          <Text className="text-white font-bold font-poppins-bold">
            Explorar Libros
          </Text>
        </Pressable>

        <View className="absolute bottom-8">
          <Text className="text-black/60 text-sm font-poppins">
            Bienvenido a tu librería favorita
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoWrapper: {
    width: 140,
    height: 140,
    borderRadius: 999,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
});
