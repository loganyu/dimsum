/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDimSum = /* GraphQL */ `
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
export const updateDimSum = /* GraphQL */ `
  mutation UpdateDimSum(
    $input: UpdateDimSumInput!
    $condition: ModelDimSumConditionInput
  ) {
    updateDimSum(input: $input, condition: $condition) {
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
export const deleteDimSum = /* GraphQL */ `
  mutation DeleteDimSum(
    $input: DeleteDimSumInput!
    $condition: ModelDimSumConditionInput
  ) {
    deleteDimSum(input: $input, condition: $condition) {
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
