import { NOVA_LOKACIJA } from "../actions/lokacije";
import Lokacija from "../../models/lokacija";

const pocetnoStanje = {
  lokacije: [],
};

export default (state = pocetnoStanje, action) => {
  switch (action.type) {
    case NOVA_LOKACIJA:
      const novaLokacija = new Lokacija(
        new Date().toString(),
        action.lokacija.naziv,
        action.lokacija.slika
      );
      return {
        lokacije: state.lokacije.concat(novaLokacija),
      };
    default:
      return state;
  }
};
