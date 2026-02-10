import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, FlatList, Image, StyleSheet } from "react-native";

export default function App() {
  const [ingredient, setIngredient] = useState("");
  const [meals, setMeals] = useState([]);

  const findMeals = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
      });
  };

  return (
    <SafeAreaView style={{ marginTop: 50, padding: 20 }}>      
      <Text>{ingredient}</Text>

      <TextInput
        style={styles.input}
        value={ingredient}
        onChangeText={setIngredient}
      />

      <Button title="ETSI" onPress={findMeals} />

      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={{ uri: item.strMealThumb }} style={styles.img} />
            <Text style={styles.mealName}>{item.strMeal}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },
  img: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  mealName: {
    fontSize: 16
  }
});
