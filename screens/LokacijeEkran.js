import React, { useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton";
import PrikazLokacije from "../components/PrikazLokacije";
import { useSelector, useDispatch } from "react-redux";
import * as akcijeLokacija from "../store/actions/lokacije";
import { ocistiLokacije } from "../helpers/db";

const LokacijeEkran = (props) => {
  const lokacije = useSelector((state) => state.lokacije.lokacije);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(akcijeLokacija.ucitajLokacije());
  }, [dispatch]);

  const ocistiBazu = async () => {
    const rez = await ocistiLokacije();
    console.log("Baza prazna", rez);
  };

  const prikaziLokacije = (data) => {
    return (
      <PrikazLokacije
        slika={data.item.uriSlike}
        naziv={data.item.naziv}
        adresa={data.item.adresa}
        odabir={() => {
          props.navigation.navigate("Detalji", {
            nazivLokacije: data.item.naziv,
            idLokacije: data.item.id,
          });
        }}
      />
    );
  };
  return (
    <View>
      <FlatList data={lokacije} renderItem={prikaziLokacije} />
      <Button title="Ocisti bazu" onPress={ocistiBazu} />
    </View>
  );
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
