import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const API_URL = 'https://api.apilayer.com/exchangerates_data/latest?base=EUR';
const API_KEY = 'cgrxskzDyWnYw0mk4IJPLh0EOkeN5OUa';

export default function App() {
  const [rates, setRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [amount, setAmount] = useState(' ');
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(API_URL, { headers: { apikey: API_KEY } })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
          setRates(data.rates);
          const keys = Object.keys(data.rates);
          if (!keys.includes('USD') && keys.length > 0) setSelectedCurrency(keys[0]);
        }
      })
  }, []);

  const convert = () => {
    const value = parseFloat(String(amount).replace(',', '.'));
    if (isNaN(value)) return;
    const rate = rates[selectedCurrency];
    if (!rate) return;
    const eur = value / rate;
    setResult(eur.toFixed(2));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {result !== null && <Text style={styles.result}>{result} €</Text>}

        <View style={styles.row}>
          <TextInput
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            style={styles.input}
          />

          <Picker
            selectedValue={selectedCurrency}
            onValueChange={setSelectedCurrency}
            style={styles.picker}
            mode="dropdown"
          >
            {Object.keys(rates).sort().map((code) => (
              <Picker.Item key={code} label={code} value={code} />
            ))}
          </Picker>
        </View>

        <Button title="Convert" onPress={convert} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  result: { fontSize: 28, fontWeight: '600', marginBottom: 20 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  input: {
    borderBottomWidth: 1, borderColor: '#0099cc', width: 100, marginRight: 10, fontSize: 18, textAlign: 'center'
  },
  picker: {width: 120, marginLeft: 20}
});


