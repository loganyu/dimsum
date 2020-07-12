import * as React from "react";

import { DrawerActions, RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

import { Button } from "react-native";
import { Categories } from "../constants";
import DimSumDetailsScreen from "../screens/DimSumDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import { Icon } from "react-native-elements";
import { RootStackParamList } from "../App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

type HomeNavigatorProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

type HeadLeftButtonProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const HeaderLeftButton = ({ navigation }: HeadLeftButtonProps) => (
  <Icon
    name="bars"
    type="font-awesome"
    color="white"
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
  />
);

const Stack = createStackNavigator<RootStackParamList>();

function HomeNavigator({ navigation, route }: HomeNavigatorProps): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "red" },
        headerLeftContainerStyle: { padding: 20 },
      }}
    >
      <Stack.Screen
        name={route.name}
        component={HomeScreen}
        options={{
          headerLeft: () => HeaderLeftButton({ navigation }),
        }}
      />
      <Stack.Screen name="DimSumDetails" component={DimSumDetailsScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
