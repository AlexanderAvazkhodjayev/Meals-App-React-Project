import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoriesScreen = (props) => {
  //console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title="Go To Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
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

export default CategoriesScreen;
