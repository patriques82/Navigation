import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import GridItem from "../components/GridItem";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    };

    return (
      <GridItem
        title={itemData.item.title}
        color={itemData.item.color}
        id={itemData.item.id}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
