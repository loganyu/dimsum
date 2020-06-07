import * as React from "react";

import DimSumList from "../components/DimSumList";
import { View } from "react-native";

function HomeScreen(): JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <DimSumList />
    </View>
  );
}

export default HomeScreen;
