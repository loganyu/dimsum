import * as React from "react";

import { DrawerActions, RouteProp } from "@react-navigation/native";

import { Button } from "react-native";
import DimSumDetailsScreen from "../screens/DimSumDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";

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
  <Button
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    title="Menu"
    color="#00cc00"
  />
);

const Stack = createStackNavigator<RootStackParamList>();

function HomeNavigator({ navigation, route }: HomeNavigatorProps): JSX.Element {
  return (
    <Stack.Navigator>
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
