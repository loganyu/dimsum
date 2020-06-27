import { AsyncStorage, FlatList, Text, View } from "react-native";
import React, { useContext } from "react";

import { Categories } from "../constants";
import { DimSumContext } from "../DimSumContext";
import DimSumListItem from "./DimSumListItem";
import { dimSumItems } from "../data/mockData";
import { useNavigationState } from "@react-navigation/native";

function DimSumList(): JSX.Element {
  const category = useNavigationState(
    (state): Categories => state.routes[0].name as Categories
  );
  const { dimSums, loading } = useContext(DimSumContext);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={dimSums.filter((ds) => ds.categories.includes(category))}
      numColumns={2}
      renderItem={({ item }) => {
        return <DimSumListItem item={item} />;
      }}
      keyExtractor={(item) => item.name}
    />
  );
}

export default DimSumList;
