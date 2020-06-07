import * as React from "react";
import { Button, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../App";

interface ItemDetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

function ItemDetailsScreen({
  navigation,
}: ItemDetailsScreenProps): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default ItemDetailsScreen;
