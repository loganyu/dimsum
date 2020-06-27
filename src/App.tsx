import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import Amplify from "aws-amplify";
import { Categories } from "./constants";
import { DimSumProvider } from "./DimSumContext";
import HomeNavigator from "./navigators/HomeNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-elements";
import config from "../aws-exports";
import { createDrawerNavigator } from "@react-navigation/drawer";

Amplify.configure(config);

export type RootStackParamList = {
  Details: undefined;
  DimSumDetails: { item: { name: string; fileName: string } };
  Home: undefined;
};

const Drawer = createDrawerNavigator();

function MyDrawer(): JSX.Element {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name={Categories.ALL} component={HomeNavigator} />
      <Drawer.Screen name={Categories.POPULAR} component={HomeNavigator} />
      <Drawer.Screen name={Categories.TEAS} component={HomeNavigator} />
      <Drawer.Screen name={Categories.STEAMED} component={HomeNavigator} />
      <Drawer.Screen name={Categories.SAVORY} component={HomeNavigator} />
      <Drawer.Screen name={Categories.BUNS} component={HomeNavigator} />
      <Drawer.Screen name={Categories.DESSERTS} component={HomeNavigator} />
      <Drawer.Screen name={Categories.DUMPLINGS} component={HomeNavigator} />
      <Drawer.Screen
        name={Categories.RICE_NOODLE_ROLLS}
        component={HomeNavigator}
      />
      <Drawer.Screen
        name={Categories.CONGEE_AND_RICE}
        component={HomeNavigator}
      />
    </Drawer.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <DimSumProvider>
      <ThemeProvider>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </ThemeProvider>
    </DimSumProvider>
  );
}

export default App;
