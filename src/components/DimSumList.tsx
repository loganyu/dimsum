import * as React from "react";

import DimSumListItem from "./DimSumListItem";
import { FlatList } from "react-native";
import { dimSumItems } from "../data/mockData";

function DimSumList(): JSX.Element {
  return (
    <FlatList
      data={dimSumItems}
      numColumns={2}
      renderItem={({ item }) => {
        return <DimSumListItem item={item} />;
      }}
      keyExtractor={(item) => item.name}
    />
  );
}

export default DimSumList;
