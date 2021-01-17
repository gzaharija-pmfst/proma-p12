import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import DetaljiEkran from "../screens/DetaljiEkran";
import DodajEKran from "../screens/DodajEkran";
import MapaEKran from "../screens/MapaEkran";
import LokacijeEkran from "../screens/LokacijeEkran";
import Boje from "../constants/Boje";

const LokacijeNavigator = createStackNavigator(
  {
    Lokacije: LokacijeEkran,
    Detalji: DetaljiEkran,
    Nova: DodajEKran,
    Mapa: MapaEKran,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Boje.glavna,
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(LokacijeNavigator);
