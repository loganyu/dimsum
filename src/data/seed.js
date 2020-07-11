const Amplify = require("aws-amplify");
const fs = require("fs");
const path = require("path");

const axios = require("axios");
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

const createDimSum = gql`
  mutation CreateDimSum(
    $input: CreateDimSumInput!
    $condition: ModelDimSumConditionInput
  ) {
    createDimSum(input: $input, condition: $condition) {
      id
      name
      fileName
      description
      jyutping
      pinyin
      chinese
      categories
      createdAt
      updatedAt
    }
  }
`;

async function createDimSumItem(properties) {
  try {
    const graphqlData = await axios({
      url:
        "https://7chlfja45rd3zheecz6b4aebdi.appsync-api.us-east-1.amazonaws.com/graphql",
      method: "post",
      headers: {
        "x-api-key": "da2-auo5g5q7zbhqvh3ufp5speembe",
      },
      data: {
        query: print(createDimSum),
        variables: {
          input: properties,
        },
      },
    });
    console.log(graphqlData.data);
  } catch (err) {
    console.log("error posting to appsync: ", err);
  }
}

fs.readFile(path.resolve(__dirname, "dimSumData.csv"), "utf8", (err, data) => {
  data.split("\n").forEach((row, i) => {
    if (i === 0) {
      return;
    }
    dimSumData = row.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
    categories = dimSumData[5].split(/["\s,]+/).filter((el) => el !== "");
    properties = {
      name: dimSumData[0],
      fileName: dimSumData[1],
      jyutping: dimSumData[2],
      pinyin: dimSumData[3],
      chinese: dimSumData[4],
      categories: categories,
      description: dimSumData[6].slice(1, -1),
    };
    createDimSumItem(properties);
  });
});
