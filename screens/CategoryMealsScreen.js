import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Platform,
} from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Colors from "../constants/Colors";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default CategoryMealsScreen;
