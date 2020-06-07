import * as React from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  ImageURISource,
} from "react-native";
import { Card } from "react-native-elements";

const screenWidth = Math.round(Dimensions.get("window").width);

interface DimSumListItemProps {
  item: {
    image: ImageURISource;
    name: string;
  };
}

function DimSumListItem({ item }: DimSumListItemProps): JSX.Element {
  return (
    <TouchableOpacity activeOpacity={0.9}>
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
