import * as FS from "expo-file-system";

export const NOVA_LOKACIJA = "NOVA_LOKACIJA";
export const UCITAJ_LOKACIJE = "UCITAJ_LOKACIJE";

import { insertLokacije, dohvatiLokacije } from "../../helpers/db";
import ENV from "../../env";

export const novaLokacija = (naziv, slika, lokacija) => {
  return async (dispatch) => {
    const googlePutanja = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lokacija.lat},${lokacija.lng}&key=${ENV.google_api}`;
    const mapQuestPutanja = `https://www.mapquestapi.com/geocoding/v1/reverse?key=${ENV.mapQuest_api}&location=${lokacija.lat}%2C${lokacija.lng}&outFormat=json&thumbMaps=false`;
    const rezultat = await fetch(mapQuestPutanja);
    const podaci = await rezultat.json();
    if (!podaci.results) {
      throw new Error("Pogreška pri dohvatu adrese");
    }
    const adresa = podaci.results[0].locations[0].street;

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
        adresa,
        lokacija.lat,
        lokacija.lng
      );
      //console.log(dbRezultat);
      dispatch({
        type: NOVA_LOKACIJA,
        lokacija: {
          id: dbRezultat.insertId,
          naziv: naziv,
          slika: novaPutanja,
          adresa: adresa,
          koordinate: {
            lat: lokacija.lat,
            lng: lokacija.lng
          }
        },
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
