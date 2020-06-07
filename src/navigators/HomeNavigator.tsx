import * as React from "react";
import { Button } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ItemDetailsScreen from "../screens/ItemDetailsScreen";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type HomeScreenNavigationProps = StackNavigationProp<RootStackParamList>;

type HomeNavigatorProps = {
  navigation: HomeScreenNavigationProps;
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

function HomeNavigator({ navigation }: HomeNavigatorProps): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerLeft: () => HeaderLeftButton({ navigation }),
        }}
      />
      <Stack.Screen name="Details" component={ItemDetailsScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
