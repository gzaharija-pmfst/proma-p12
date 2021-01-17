import { NOVA_LOKACIJA } from "../actions/lokacije";
import Lokacija from '../../models/lokacija'
import LokacijeEkran from "../../screens/LokacijeEkran";

const pocetnoStanje = {
  lokacije: [],
};

export default (state = pocetnoStanje, action) => {
  switch (action.type) {
    case NOVA_LOKACIJA:
      const novaLokacija = new Lokacija(new Date().toString(), action.lokacija.naziv);
      return {
        lokacije: state.lokacije.concat(novaLokacija)
      }

    default:
      return state;
  }
};
