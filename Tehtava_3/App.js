import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Laskin from './components/laskin_listalla';



export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Laskin />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
