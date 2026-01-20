import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function Laskin() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [tulos, setTulos] = useState(null);

    const Summa = () => {
        setTulos(Number(numero1) + Number(numero2));
    };

    const Erotus = () => {
        setTulos(Number(numero1) - Number(numero2));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Laskin</Text>
            
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Syötä ensimmäinen numero"
                value={numero1}
                onChangeText={setNumero1}
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Syötä toinen numero"
                value={numero2}
                onChangeText={setNumero2}
            />
            <View style={styles.buttonContainer}>
                <Button title="Summa" onPress={Summa} />
                <Button title="Erotus" onPress={Erotus} />
            </View>
            
            {tulos !== null &&  <Text style={styles.result}>Tulos: {tulos}</Text>}
        </View>
    );    
}
const styles = StyleSheet.create({
    container: { marginBottom: 40 },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    input: {
      borderWidth: 1,
      padding: 8,
      marginVertical: 5,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 10,
    },
    result: { fontSize: 18, marginTop: 10 },
  });