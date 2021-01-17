import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton";

const LokacijeEkran = (props) => {
  return (
    <View>
      <Text>Ekran sa popisom svih lokacija</Text>
    </View>
  );
};

LokacijeEkran.navigationOptions = (navData) => {
  return {
    headerTitle: "Popis lokacija",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={NavButton}>
          <Item title="Dodaj" iconName="md-add" onPress={() => {navData.navigation.navigate('Nova')}} />
        </HeaderButtons>
      );
    },
  };
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LokacijeEkran;
