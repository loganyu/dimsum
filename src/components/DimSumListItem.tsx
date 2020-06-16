import * as React from "react";

import { Dimensions, TouchableOpacity, View } from "react-native";

import { Card } from "react-native-elements";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { getImageUrl } from "../utils";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Math.round(Dimensions.get("window").width);

interface DimSumListItemProps {
  item: {
    fileName: string;
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
          image={{ uri: getImageUrl(item.fileName) }}
          title={item.name}
        ></Card>
      </View>
    </TouchableOpacity>
  );
}

export default DimSumListItem;
