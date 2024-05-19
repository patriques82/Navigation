import { StyleSheet, FlatList, View } from "react-native";
import { useEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem.js";

const MealsOverviewScreen = () => {
  const displayedMeals = MEALS;
  const category = CATEGORIES[0];

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    return <MealItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
