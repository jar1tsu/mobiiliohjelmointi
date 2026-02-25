import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet, Alert, View } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [marker, setMarker] = useState(null);

  const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('No permission to access location');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    };

    getLocation();
  }, []);

  const fetchCoordinates = async () => {
    if (!address.trim()) {
      Alert.alert("Error", "Please enter an address");
      return;
    }

    try {
      const url = 
        `https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${API_KEY}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!data || data.length === 0) {
        Alert.alert("Not found", "Address not found");
        return;
      }

      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      setLocation({
        coords: { latitude: lat, longitude: lon }
      });

      setMarker({ latitude: lat, longitude: lon });
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  };

  if (!location) {
    return <View style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221,
        }}
      >
        {marker && <Marker coordinate={marker} />}
      </MapView>

      <TextInput
        style={styles.input}
        placeholder="Enter address"
        value={address}
        onChangeText={setAddress}
      />

      <Button title="SHOW" onPress={fetchCoordinates} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 4 },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
});
