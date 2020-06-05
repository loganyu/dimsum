import * as React from "react";
import { View } from "react-native";
import DimSumList from "../components/DimSumList";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <DimSumList />
    </View>
  );
}

export default HomeScreen;
