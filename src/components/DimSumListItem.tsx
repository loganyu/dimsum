import * as React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { Card } from "react-native-elements";

const screenWidth = Math.round(Dimensions.get("window").width);

function DimSumListItem({ item }) {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View>
        <Card
          containerStyle={{ width: screenWidth / 2, margin: 0 }}
          title={item.name}
          image={item.image}
        ></Card>
      </View>
    </TouchableOpacity>
  );
}

export default DimSumListItem;
