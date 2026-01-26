import {SafeAreaView,View, Text, TextInput, Button, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';

export default function Laskin() {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [tulos, setTulos] = useState(null);
    const [historia, setHistoria] = useState([]);

    const Summa = () => {
        setTulos(Number(numero1) + Number(numero2));
        setHistoria([...historia, `${numero1} + ${numero2} = ${Number(numero1) + Number(numero2)}`]);
    };

    const Erotus = () => {
        setTulos(Number(numero1) - Number(numero2));
        setHistoria([...historia, `${numero1} - ${numero2} = ${Number(numero1) - Number(numero2)}`]);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
        
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

            <FlatList
                data={historia}
                keyExtractor={(item, index) => `${item}-${index}`}
                renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
            />
        </View>
    </SafeAreaView>

    );    
}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
  
    container: { 
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 16,
      paddingTop: 8,
      paddingBottom: 16,
    },
  
    title: { 
      fontSize: 24, 
      fontWeight: '700', 
      marginBottom: 12, 
      color: '#111' 
    },
  
    input: {
      borderWidth: 1,
      borderColor: '#e0e0e0',
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginVertical: 6,
      borderRadius: 8,
      fontSize: 16,
    },
  
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 10,
    },
  
    result: { 
      fontSize: 18, 
      marginTop: 10, 
      fontWeight: '600' 
    },
  
    historyItem: { 
      fontSize: 18, 
      paddingVertical: 8 
    },
  });
  