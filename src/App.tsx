import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./navigators/HomeNavigator";
import ItemNavigator from "./navigators/ItemNavigator";
import { ThemeProvider } from "react-native-elements";

export type RootStackParamList = {
  Details: undefined;
  Home: undefined;
  Items: undefined;
};

const Drawer = createDrawerNavigator();

function MyDrawer(): JSX.Element {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="Favorites" component={ItemNavigator} />
      <Drawer.Screen name="All Dim Sum" component={ItemNavigator} />
      <Drawer.Screen name="Popular" component={ItemNavigator} />
      <Drawer.Screen name="Teas" component={ItemNavigator} />
      <Drawer.Screen name="Steamed" component={ItemNavigator} />
      <Drawer.Screen name="Savory" component={ItemNavigator} />
      <Drawer.Screen name="Buns" component={ItemNavigator} />
      <Drawer.Screen name="Desserts" component={ItemNavigator} />
      <Drawer.Screen name="Dumplings" component={ItemNavigator} />
      <Drawer.Screen name="Rice Noodle Rolls" component={ItemNavigator} />
      <Drawer.Screen name="Congee and Rice" component={ItemNavigator} />
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
