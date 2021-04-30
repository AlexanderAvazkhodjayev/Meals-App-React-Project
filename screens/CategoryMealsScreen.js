import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoriesMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen!</Text>
      <Button
        title="Go To Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: "mealDetail" });
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealsScreen;
