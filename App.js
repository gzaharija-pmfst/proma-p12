import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { StyleSheet, Text, View } from "react-native";

import LokacijeNavigator from "./navigation/LokacijeNavigacija";
import lokacijeReducer from "./store/reducers/lokacije";
import {init} from './helpers/db'

init()
.then(() => {
  console.log('Baza podataka inicijalizirana');
})
.catch((err) => {
  console.log('Pogreška prilikom inicijalizacije');
  console.log(err);
});

const glavniReducer = combineReducers({
  lokacije: lokacijeReducer,
});

const store = createStore(glavniReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <LokacijeNavigator />
    </Provider>
  );
}

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
