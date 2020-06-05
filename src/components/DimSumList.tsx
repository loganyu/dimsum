import * as React from "react";
import { Image, View, Text, FlatList } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { CAA_SIU_BUN } from "../images/index";
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
