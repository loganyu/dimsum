import * as React from "react";

import { CAA_SIU_BUN } from "./images";
import { Categories } from "./constants";
import HomeNavigator from "./navigators/HomeNavigator";
import { ImageURISource } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "react-native-elements";
import { createDrawerNavigator } from "@react-navigation/drawer";

export type RootStackParamList = {
  Details: undefined;
  DimSumDetails: { item: { name: string; image: ImageURISource } };
  Home: undefined;
};

const Drawer = createDrawerNavigator();

function MyDrawer(): JSX.Element {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name={Categories.All} component={HomeNavigator} />
      <Drawer.Screen name={Categories.Popular} component={HomeNavigator} />
      <Drawer.Screen name={Categories.Teas} component={HomeNavigator} />
      <Drawer.Screen name={Categories.Steamed} component={HomeNavigator} />
      <Drawer.Screen name={Categories.Savory} component={HomeNavigator} />
      <Drawer.Screen name={Categories.Buns} component={HomeNavigator} />
      <Drawer.Screen name={Categories.Desserts} component={HomeNavigator} />
      <Drawer.Screen name={Categories.Dumplings} component={HomeNavigator} />
      <Drawer.Screen
        name={Categories.RiceNoodleRolls}
        component={HomeNavigator}
      />
      <Drawer.Screen
        name={Categories.CongeeAndRice}
        component={HomeNavigator}
      />
    </Drawer.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
