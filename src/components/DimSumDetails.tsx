import * as React from "react";

import { Card, Divider, Text } from "react-native-elements";
import { Dimensions, Image, StyleSheet, View } from "react-native";

import { getImageUrl } from "../utils";
import { useHeaderHeight } from "@react-navigation/stack";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  image: {
    height: screenHeight / 2,
    width: screenWidth - 20,
  },
});

interface DimSumDetailsProps {
  item: {
    fileName: string;
    name: string;
    pinyin: string;
    jyutping: string;
    chinese: string;
    description: string;
  };
}

function DimSumDetails({ item }: DimSumDetailsProps): JSX.Element {
  const headerHeight = useHeaderHeight();

  return (
    <View>
      <Card
        containerStyle={{
          height: screenHeight - headerHeight,
        }}
        title={item.name}
      >
        <Image
          style={styles.image}
          source={{
            uri: getImageUrl(item.fileName),
          }}
        />
        <Text>{item.chinese}</Text>
        <Divider />
        <Text>Mandarin Pinyin: {item.pinyin}</Text>
        <Divider />
        <Text>Cantonese Jyutping: {item.jyutping}</Text>
        <Divider />
        <Text>{item.description}</Text>
      </Card>
    </View>
  );
}

export default DimSumDetails;
