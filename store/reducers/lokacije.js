import { NOVA_LOKACIJA, UCITAJ_LOKACIJE } from "../actions/lokacije";
import Lokacija from "../../models/lokacija";

const pocetnoStanje = {
  lokacije: [],
};

export default (state = pocetnoStanje, action) => {
  switch (action.type) {
    case NOVA_LOKACIJA:
      const novaLokacija = new Lokacija(
        action.lokacija.id.toString(),
        action.lokacija.naziv,
        action.lokacija.slika
      );
      return {
        lokacije: state.lokacije.concat(novaLokacija),
      };
    case UCITAJ_LOKACIJE:
      const noviNiz = action.lokacije.map(
        (l) => new Lokacija(l.id.toString(), l.naziv, l.uriSlike)
      );
      return {
        lokacije: noviNiz,
      };
    default:
      return state;
  }
};
