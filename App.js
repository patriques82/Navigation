import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, ScrollView } from "react-native";

//import FavoritesContextProvider from "./store/context/FavoritesContext";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  drawer: {
    backgroundColor: "white",
    marginTop: 30,
  },
});
