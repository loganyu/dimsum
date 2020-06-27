/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDimSumInput = {
  id?: string | null;
  name: string;
  fileName: string;
  description: string;
  jyutping: string;
  pinyin: string;
  chinese: string;
  categories: Array<Category | null>;
};

export enum Category {
  ALL = "ALL",
  BUNS = "BUNS",
  CONGEE_AND_RICE = "CONGEE_AND_RICE",
  DESSERTS = "DESSERTS",
  DUMPLINGS = "DUMPLINGS",
  POPULAR = "POPULAR",
  RICE_NOODLE_ROLLS = "RICE_NOODLE_ROLLS",
  SAVORY = "SAVORY",
  STEAMED = "STEAMED",
  TEAS = "TEAS",
}

export type ModelDimSumConditionInput = {
  name?: ModelStringInput | null;
  fileName?: ModelStringInput | null;
  description?: ModelStringInput | null;
  jyutping?: ModelStringInput | null;
  pinyin?: ModelStringInput | null;
  chinese?: ModelStringInput | null;
  categories?: ModelCategoryListInput | null;
  and?: Array<ModelDimSumConditionInput | null> | null;
  or?: Array<ModelDimSumConditionInput | null> | null;
  not?: ModelDimSumConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelCategoryListInput = {
  eq?: Array<Category | null> | null;
  ne?: Array<Category | null> | null;
  contains?: Category | null;
  notContains?: Category | null;
};

export type UpdateDimSumInput = {
  id: string;
  name?: string | null;
  fileName?: string | null;
  description?: string | null;
  jyutping?: string | null;
  pinyin?: string | null;
  chinese?: string | null;
  categories?: Array<Category | null> | null;
};

export type DeleteDimSumInput = {
  id?: string | null;
};

export type ModelDimSumFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  fileName?: ModelStringInput | null;
  description?: ModelStringInput | null;
  jyutping?: ModelStringInput | null;
  pinyin?: ModelStringInput | null;
  chinese?: ModelStringInput | null;
  categories?: ModelCategoryListInput | null;
  and?: Array<ModelDimSumFilterInput | null> | null;
  or?: Array<ModelDimSumFilterInput | null> | null;
  not?: ModelDimSumFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateDimSumMutationVariables = {
  input: CreateDimSumInput;
  condition?: ModelDimSumConditionInput | null;
};

export type CreateDimSumMutation = {
  createDimSum: {
    __typename: "DimSum";
    id: string;
    name: string;
    fileName: string;
    description: string;
    jyutping: string;
    pinyin: string;
    chinese: string;
    categories: Array<Category | null>;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateDimSumMutationVariables = {
  input: UpdateDimSumInput;
  condition?: ModelDimSumConditionInput | null;
};

export type UpdateDimSumMutation = {
  updateDimSum: {
    __typename: "DimSum";
    id: string;
    name: string;
    fileName: string;
    description: string;
    jyutping: string;
    pinyin: string;
    chinese: string;
    categories: Array<Category | null>;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteDimSumMutationVariables = {
  input: DeleteDimSumInput;
  condition?: ModelDimSumConditionInput | null;
};

export type DeleteDimSumMutation = {
  deleteDimSum: {
    __typename: "DimSum";
    id: string;
    name: string;
    fileName: string;
    description: string;
    jyutping: string;
    pinyin: string;
    chinese: string;
    categories: Array<Category | null>;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetDimSumQueryVariables = {
  id: string;
};

export type GetDimSumQuery = {
  getDimSum: {
    __typename: "DimSum";
    id: string;
    name: string;
    fileName: string;
    description: string;
    jyutping: string;
    pinyin: string;
    chinese: string;
    categories: Array<Category | null>;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListDimSumsQueryVariables = {
  filter?: ModelDimSumFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListDimSumsQuery = {
  listDimSums: {
    __typename: "ModelDimSumConnection";
    items: Array<{
      __typename: "DimSum";
      id: string;
      name: string;
      fileName: string;
      description: string;
      jyutping: string;
      pinyin: string;
      chinese: string;
      categories: Array<Category | null>;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateDimSumSubscription = {
  onCreateDimSum: {
    __typename: "DimSum";
    id: string;
    name: string;
    fileName: string;
    description: string;
    jyutping: string;
    pinyin: string;
    chinese: string;
    categories: Array<Category | null>;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateDimSumSubscription = {
  onUpdateDimSum: {
    __typename: "DimSum";
    id: string;
    name: string;
    fileName: string;
    description: string;
    jyutping: string;
    pinyin: string;
    chinese: string;
    categories: Array<Category | null>;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteDimSumSubscription = {
  onDeleteDimSum: {
    __typename: "DimSum";
    id: string;
    name: string;
    fileName: string;
    description: string;
    jyutping: string;
    pinyin: string;
    chinese: string;
    categories: Array<Category | null>;
    createdAt: string;
    updatedAt: string;
  } | null;
};
