/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDimSum = /* GraphQL */ `
  query GetDimSum($id: ID!) {
    getDimSum(id: $id) {
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
export const listDimSums = /* GraphQL */ `
  query ListDimSums(
    $filter: ModelDimSumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDimSums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
