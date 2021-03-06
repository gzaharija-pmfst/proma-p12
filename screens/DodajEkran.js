import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import * as lokacijeAkcije from "../store/actions/lokacije";
import Boje from "../constants/Boje";

const DodajEkran = (props) => {
  const [naslovUnos, postaviNaslov] = useState("");

  const dispatch = useDispatch();

  const noviNaslov = (novi) => {
    postaviNaslov(novi);
  };

  const spremiNovuLokaciju = () => {
    dispatch(lokacijeAkcije.novaLokacija(naslovUnos));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={stil.forma}>
        <Text style={stil.oznaka}>Naziv</Text>
        <TextInput
          style={stil.unosTeksta}
          value={naslovUnos}
          onChangeText={noviNaslov}
        />
        <Button
          title="Spremi lokaciju"
          color={Boje.glavna}
          onPress={spremiNovuLokaciju}
        />
      </View>
    </ScrollView>
  );
};

DodajEkran.navigationOptions = () => {
  return {
    headerTitle: "Nova lokacija",
  };
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  forma: {
    margin: 30,
  },
  unosTeksta: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  oznaka: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default DodajEkran;
