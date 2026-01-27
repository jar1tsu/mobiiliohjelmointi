import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Button, StyleSheet, FlatList} from 'react-native';

export default function Ostoslista() {
    const [tuote, setTuote] = useState('');
    const [ostoslista, setOstoslista] = useState([]);

    const lisaaTuote = () => {
        if (tuote.trim() !== '') {
            setOstoslista([...ostoslista, tuote.trim()]);
            setTuote('');
        }
    };

    const tyhjennäLista = () => {
        setOstoslista([]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Ostoslista</Text>
            <TextInput
                style={styles.input}
                placeholder="Syötä tuotteen nimi"
                value={tuote}
                onChangeText={setTuote}
            />
            <View style={styles.buttonContainer}>
                <Button title="Lisää tuote" onPress={lisaaTuote} />
                <Button title="Poista kaikki tuotteet" onPress={tyhjennäLista} />
            </View>
            <FlatList
                data={ostoslista}
                keyExtractor={(item, index) => `${item}-${index}`}
                renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    listItem: {
        fontSize: 18,
        paddingVertical: 5,
    },
});