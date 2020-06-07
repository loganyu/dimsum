import * as React from "react";
import { Button, View, Text } from "react-native";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";

interface ItemsScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

function ItemsScreen({ navigation }: ItemsScreenProps): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Items Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

export default ItemsScreen;
