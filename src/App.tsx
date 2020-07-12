import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import Amplify from "aws-amplify";
import { Categories } from "./constants";
import { DimSumProvider } from "./DimSumContext";
import HomeNavigator from "./navigators/HomeNavigator";
import { Icon } from "react-native-elements";
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
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{ backgroundColor: "red" }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name={Categories.ALL}
        component={HomeNavigator}
        options={{
          drawerLabel: "All Dim Sum",
          drawerIcon: () => {
            return (
              <Icon color="white" name="earth" type="material-community" />
            );
          },
        }}
      />
      <Drawer.Screen
        name={Categories.POPULAR}
        component={HomeNavigator}
        options={{
          drawerLabel: "Popular",
          drawerIcon: () => {
            return (
              <Icon
                color="white"
                name="star-circle"
                type="material-community"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name={Categories.TEAS}
        component={HomeNavigator}
        options={{
          drawerLabel: "Teas",
          drawerIcon: () => {
            return (
              <Icon color="white" name="kettle" type="material-community" />
            );
          },
        }}
      />
      <Drawer.Screen
        name={Categories.STEAMED}
        component={HomeNavigator}
        options={{
          drawerLabel: "Steamed",
          drawerIcon: () => {
            return <Icon color="white" name="pot" type="material-community" />;
          },
        }}
      />
      <Drawer.Screen
        name={Categories.SAVORY}
        component={HomeNavigator}
        options={{
          drawerLabel: "Savory",
          drawerIcon: () => {
            return (
              <Icon color="white" name="pot-mix" type="material-community" />
            );
          },
        }}
      />
      <Drawer.Screen
        name={Categories.BUNS}
        component={HomeNavigator}
        options={{
          drawerLabel: "Buns",
          drawerIcon: () => {
            return (
              <Icon
                color="white"
                name="bread-slice"
                type="material-community"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name={Categories.DESSERTS}
        component={HomeNavigator}
        options={{
          drawerLabel: "Desserts",
          drawerIcon: () => {
            return (
              <Icon color="white" name="cupcake" type="material-community" />
            );
          },
        }}
      />
      <Drawer.Screen
        name={Categories.DUMPLINGS}
        component={HomeNavigator}
        options={{
          drawerLabel: "Dumplings",
          drawerIcon: () => {
            return (
              <Icon
                color="white"
                name="food-croissant"
                type="material-community"
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name={Categories.RICE_NOODLE_ROLLS}
        component={HomeNavigator}
        options={{
          drawerLabel: "Rice Noodle Rolls",
          drawerIcon: () => {
            return (
              <Icon color="white" name="waves" type="material-community" />
            );
          },
        }}
      />
      <Drawer.Screen
        name={Categories.CONGEE_AND_RICE}
        component={HomeNavigator}
        options={{
          drawerLabel: "Congree and Rice",
          drawerIcon: () => {
            return <Icon color="white" name="rice" type="material-community" />;
          },
        }}
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
