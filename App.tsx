import React from "react";
import { Provider } from "react-redux";
import { RootState, store, useAppSelector } from "./store";
import Routers from "./routing/routing";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
