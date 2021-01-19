import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton";
import PrikazLokacije from "../components/PrikazLokacije";
import { useSelector } from "react-redux";

const LokacijeEkran = (props) => {
  const lokacije = useSelector((state => state.lokacije.lokacije));
  const prikaziLokacije = (data) => {
    return (
      <PrikazLokacije
        slika={data.item.uriSlike}
        naziv={data.item.naziv}
        adresa={null}
        odabir={() => {
          props.navigation.navigate("Detalji", {
            nazivLokacije: data.item.naziv,
            idLokacije: data.item.id,
          });
        }}
      />
    );
  };
  return <FlatList data={lokacije} renderItem={prikaziLokacije} />;
};

LokacijeEkran.navigationOptions = (navData) => {
  return {
    headerTitle: "Popis lokacija",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={NavButton}>
          <Item
            title="Dodaj"
            iconName="md-add"
            onPress={() => {
              navData.navigation.navigate("Nova");
            }}
          />
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
