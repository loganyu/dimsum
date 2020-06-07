import * as React from "react";
import { Button } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ItemsScreen from "../screens/ItemsScreen";
import ItemDetailsScreen from "../screens/ItemDetailsScreen";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../App";

const Stack = createStackNavigator();

type ItemNavigatorProps = {
  navigation: StackNavigationProp<RootStackParamList>;
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

function ItemNavigator({ navigation }: ItemNavigatorProps): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Items">
      <Stack.Screen
        name="Items"
        component={ItemsScreen}
        options={{
          title: "Dim Sum",
          headerLeft: () => HeaderLeftButton({ navigation }),
        }}
      />
      <Stack.Screen name="Details" component={ItemDetailsScreen} />
    </Stack.Navigator>
  );
}

export default ItemNavigator;
