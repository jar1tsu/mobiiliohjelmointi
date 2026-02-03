import {SafeAreaView, View, Text, TextInput, Button, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';

export default function Laskin({ navigation, historia, setHistoria }) {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [tulos, setTulos] = useState(null);


    const Summa = () => {
        setTulos(Number(numero1) + Number(numero2));
        setHistoria([...historia, `${numero1} + ${numero2} = ${Number(numero1) + Number(numero2)}`]);
    };

    const Erotus = () => {
        setTulos(Number(numero1) - Number(numero2));
        setHistoria([...historia, `${numero1} - ${numero2} = ${Number(numero1) - Number(numero2)}`]);
    };

   
return (
    <View style={styles.container}>
      <Text style={styles.title}>Laskin</Text>

      {tulos !== null && <Text style={styles.result}>Result: {tulos}</Text>}

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder=""
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder=""
        value={numero2}
        onChangeText={setNumero2}
      />

      <View style={styles.buttonRow}>
        <Button title="+" onPress={Summa} />
        <Button title="-" onPress={Erotus} />
        <Button title="Historia" onPress={() => navigation.navigate('Historia', { historia })} color="#1976d2" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    alignItems: 'center' 
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '700',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#888',
    padding: 8,
    marginVertical: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 10,
  },
  result: {
    fontSize: 18,
    marginVertical: 10,
  },
});
