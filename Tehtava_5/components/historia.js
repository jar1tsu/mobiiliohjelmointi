import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';

export default function Historia({ historia }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historia</Text>

      <FlatList
        data={Array.isArray(historia) ? historia : []}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
        ListEmptyComponent={<Text style={styles.item}>Ei vielä laskuja</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
  },
  item: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 4,
  },
});