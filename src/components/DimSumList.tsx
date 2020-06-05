import * as React from "react";
import { FlatList } from "react-native";
import DimSumListItem from "./DimSumListItem";
import { dimSumItems } from "../data/mockData";

function DimSumList() {
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
