import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function ArvaaNumero() {
    const [randomNumero, setRandomNumero] = useState(Math.floor(Math.random() * 100) + 1);
    const [arvaus, setArvaus] = useState('');
    const [viesti, setViesti] = useState('');
    const [yritykset, setYritykset] = useState(0);
    const [peliLoppu, setPeliLoppu] = useState(false);

    const tarkistaArvaus = () => {
        const numero = Number(arvaus);
        const uusiYritys = yritykset + 1;
        setYritykset(uusiYritys);

        if (numero < randomNumero) {
            setViesti('Liian pieni! Yritä uudelleen.');
        } else if (numero > randomNumero) {
            setViesti('Liian suuri! Yritä uudelleen.');
        } else {
            setViesti(`Oikein! Arvasit numeron ${randomNumero} ${uusiYritys} yrityksellä.`);
            setPeliLoppu(true);
        }
        setArvaus('');
    };

    return (
        <View>
        <Text style={styles.title}>Arvaa numero</Text>
  
        {!peliLoppu && (
          <>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={arvaus}
              onChangeText={setArvaus}
              placeholder="Lisää arvauksesi!"
            />
            <Button title="Arvaa" onPress={tarkistaArvaus} />
          </>
        )}
  
        <Text style={styles.viesti}>{viesti}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    input: {
      borderWidth: 1,
      padding: 8,
      marginVertical: 10,
    },
    message: { fontSize: 16, marginTop: 10 },
  });  