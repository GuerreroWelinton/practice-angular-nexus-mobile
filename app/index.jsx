import { Redirect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Redirect href="/landing" />
    </SafeAreaView>
  );
};

export default App;
