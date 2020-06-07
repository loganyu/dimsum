import * as React from "react";

import DimSumDetails from "../components/DimSumDetails";
import { RootStackParamList } from "../App";
import { RouteProp } from "@react-navigation/native";
import { View } from "react-native";

type DimSumDetailsScreenRouteProp = RouteProp<
  RootStackParamList,
  "DimSumDetails"
>;

interface DimSumDetailsScreenProps {
  route: DimSumDetailsScreenRouteProp;
}

function DimSumDetailsScreen({ route }: DimSumDetailsScreenProps): JSX.Element {
  const { item } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <DimSumDetails item={item} />
    </View>
  );
}

export default DimSumDetailsScreen;
