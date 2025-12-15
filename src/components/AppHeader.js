import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function AppHeader({
  title,
  subtitle,
  showBack = false,
  onBack,
  right = null,
  children,
  bgColor,
  titleColor,
  subtitleColor,
}) {
  const router = useRouter();
  const handleBack = () => {
    if (onBack) return onBack();
    router.back();
  };

  return (
    <View
      className="px-4 py-3 shadow-sm bg-white"
      style={bgColor ? { backgroundColor: bgColor } : null}
    >
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          {showBack && (
            <Pressable onPress={handleBack} className="mb-2">
              <Text
                className="font-semibold font-poppins"
                style={
                  titleColor ? { color: titleColor } : { color: undefined }
                }
              >
                ← Volver
              </Text>
            </Pressable>
          )}

          {title ? (
            <Text
              className="text-2xl font-bold font-poppins-bold"
              style={titleColor ? { color: titleColor } : { color: undefined }}
            >
              {title}
            </Text>
          ) : null}

          {subtitle ? (
            <Text
              className="mt-1 font-roboto"
              style={
                subtitleColor ? { color: subtitleColor } : { color: undefined }
              }
            >
              {subtitle}
            </Text>
          ) : null}
        </View>

        {right ? <View className="ml-4">{right}</View> : null}
      </View>

      {children ? <View className="mt-3">{children}</View> : null}
    </View>
  );
}
