import { ScrollView, StyleSheet } from 'react-native';
import Laskin from './components/laskin';
import ArvaaNumero from './components/arvaaNumero';


export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Laskin />
      <ArvaaNumero />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
