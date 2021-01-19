import * as FS from "expo-file-system";

export const NOVA_LOKACIJA = "NOVA_LOKACIJA";
export const UCITAJ_LOKACIJE = "UCITAJ_LOKACIJE";

import { insertLokacije, dohvatiLokacije } from "../../helpers/db";

export const novaLokacija = (naziv, slika) => {
  return async (dispatch) => {
    const imeDat = slika.split("/").pop();
    const novaPutanja = FS.documentDirectory + imeDat;

    try {
      await FS.moveAsync({
        from: slika,
        to: novaPutanja,
      });
      const dbRezultat = await insertLokacije(
        naziv,
        novaPutanja,
        "Lazna adresa",
        43.5,
        16.44
      );
      console.log(dbRezultat);
      dispatch({
        type: NOVA_LOKACIJA,
        lokacija: { id: dbRezultat.insertId, naziv: naziv, slika: novaPutanja },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const ucitajLokacije = () => {
  return async (dispatch) => {
    try {
      const dbRezultat = await dohvatiLokacije();
      console.log(dbRezultat);
      dispatch({ type: UCITAJ_LOKACIJE, lokacije: dbRezultat.rows._array });
    } catch (err) {
      throw err;
    }
  };
};
