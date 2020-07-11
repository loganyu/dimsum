import { createDimSum } from "../src/graphql/mutations";

Amplify.configure(config);

const fs = require("fs");
const path = require("path");

fs.readFile(path.resolve(__dirname, "dimSumData.csv"), "utf8", (err, data) => {
  data.split("\n").forEach((row, i) => {
    if (i === 0) {
      return;
    }
    console.log(row);
    dimSumData = row.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
    console.log(dimSumData);
    properties = {
      name: dimSumData[0],
      fileName: dimSumData[1],
      jyutping: dimSumData[2],
      pinyin: dimSumData[3],
      chinese: dimSumData[4],
      categories: dimSumData[5].split(/"|,/),
      description: dimSumData[6],
    };

    graphqlOperation(createDimSum, { input: properties });
  });
});
