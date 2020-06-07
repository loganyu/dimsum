import * as React from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageURISource,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-elements";
import { useHeaderHeight } from "@react-navigation/stack";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const styles = StyleSheet.create({
  image: {
    height: screenHeight / 2,
    width: screenWidth,
  },
});

interface DimSumDetailsProps {
  item: {
    image: ImageURISource;
    name: string;
  };
}

function DimSumDetails({ item }: DimSumDetailsProps): JSX.Element {
  const headerHeight = useHeaderHeight();

  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View>
        <Card
          containerStyle={{
            height: screenHeight - headerHeight,
          }}
          title={item.name}
        >
          <Image style={styles.image} source={item.image} />
        </Card>
      </View>
    </TouchableOpacity>
  );
}

export default DimSumDetails;
