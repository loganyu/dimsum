import * as React from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  ImageURISource,
} from "react-native";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

const screenWidth = Math.round(Dimensions.get("window").width);

interface DimSumListItemProps {
  item: {
    image: ImageURISource;
    name: string;
  };
}

function DimSumListItem({ item }: DimSumListItemProps): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("DimSumDetails", { item: item })}
    >
      <View>
        <Card
          containerStyle={{ width: screenWidth / 2, margin: 0 }}
          image={item.image}
          title={item.name}
        ></Card>
      </View>
    </TouchableOpacity>
  );
}

export default DimSumListItem;
