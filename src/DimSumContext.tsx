import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";

import { AsyncStorage } from "react-native";
import { listDimSums } from "../src/graphql/queries";

export const DimSumContext = React.createContext({});
export const DimSumProvider = (props) => {
  const [dimSums, setDimSums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDimSums();
  }, []);

  async function fetchDimSums() {
    try {
      const dimSumData = await API.graphql(graphqlOperation(listDimSums));
      setDimSums(dimSumData.data.listDimSums.items);
      setLoading(false);
    } catch (err) {
      console.log("error fetching dim sum");
    }
  }

  return (
    <DimSumContext.Provider value={{ dimSums, loading }}>
      {props.children}
    </DimSumContext.Provider>
  );
};
