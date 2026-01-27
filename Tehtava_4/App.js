import { SafeAreaView, StyleSheet } from 'react-native';
import Ostoslista from './components/ostoslista';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Ostoslista />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
