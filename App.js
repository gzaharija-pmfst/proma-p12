import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { StyleSheet, Text, View } from "react-native";

import LokacijeNavigator from "./navigation/LokacijeNavigacija";
import lokacijeReducer from "./store/reducers/lokacije";

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
