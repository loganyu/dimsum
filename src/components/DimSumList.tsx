import * as React from "react";

import { Categories } from "../constants";
import DimSumListItem from "./DimSumListItem";
import { FlatList } from "react-native";
import { dimSumItems } from "../data/mockData";
import { useNavigationState } from "@react-navigation/native";

function DimSumList(): JSX.Element {
  const category = useNavigationState(
    (state): Categories => state.routes[0].name as Categories
  );
  const data = dimSumItems.filter((item) => item.categories.includes(category));

  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({ item }) => {
        return <DimSumListItem item={item} />;
      }}
      keyExtractor={(item) => item.name}
    />
  );
}

export default DimSumList;
