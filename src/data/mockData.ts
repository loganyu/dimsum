import {
  BEAN_CURD_ROLL,
  BEEF_STOMACH,
  BEEF_TRIPE,
  BIG_BUN,
  CAA_SIU_BUN,
  CHA_SIU_SOU,
  CREME_BRULE,
  DUCK_LEG_WRAP,
  SESAME_PUDDING,
  SESAME_ROLL,
} from "../images";

import { Categories } from "../constants";

export const dimSumItems = [
  {
    name: "Bean Curd Roll",
    image: BEAN_CURD_ROLL,
    description:
      "A steamed bun filled with barbecued flavored pork. A very popular and easily found dim sum item.",
    jyutping: "caa1 siu1 baau1",
    pinyin: "chā shāo bāo",
    chinese: "叉 燒 包",
    categories: [Categories.All, Categories.Buns, Categories.Popular],
  },
  {
    name: "Beef Stomach",
    image: BEEF_STOMACH,
    description:
      "These are strips of honeycomb tripe from the reticulum of cattle, which is the second chamber of a cow's stomach. The unique texture from the honeycomb structure contributes greatly to its taste. They are typically served in a black bean sauce and should be slightly chewy while being on the tender side if prepared properly.",
    jyutping: "ngau4 tou5",
    pinyin: "niú dǔ",
    chinese: "牛 肚",
    categories: [Categories.All],
  },
  {
    name: "Beef Tripe",
    image: BEEF_TRIPE,
    description:
      "These are strips of book tripe from the omasum of cattle, which is the third chamber of a cow's stomach. The name, book tripe, refers to the similarity between the structure of the tripe with its many thin sheets and a book with its many thin pages. This is usually served with ginger and scallions for a lighter taste and are often chewy. Be on the lookout for its tasty and unique texture.",
    jyutping: "ngau4 paak3 jip6",
    pinyin: "niú bǎi yè",
    chinese: "牛 柏 葉",
    categories: [Categories.All, Categories.Popular],
  },
  {
    name: "Big Bun",
    image: BIG_BUN,
    description:
      "Often served individually and sold as take-away, these can sometimes be found in dim sum establishments. It is a large bun often filled with ground pork, egg, Chinese sausage, and mushrooms. However, the filling will vary depending on location and establishment.",
    jyutping: "daai6 baau1",
    pinyin: "dà bāo",
    chinese: "大 包",
    categories: [Categories.All, Categories.Buns],
  },
  {
    name: "Barbecued Pork Bun",
    image: CAA_SIU_BUN,
    description:
      "A steamed bun filled with barbecued flavored pork. A very popular and easily found dim sum item.",
    jyutping: "caa1 siu1 baau1",
    pinyin: "chā shāo bāo",
    chinese: "叉 燒 包",
    categories: [
      Categories.All,
      Categories.Buns,
      Categories.Popular,
      Categories.Steamed,
    ],
  },
  {
    name: "Barbecued Pork Puff",
    image: CHA_SIU_SOU,
    description:
      "A baked pastry filled with barbecued pork. The exterior crust is thin, delicate, and crispy while the interior is soft and tender. Best enjoyed hot.",
    jyutping: "caa1 siu1 sou1",
    pinyin: "chā shāo sū",
    chinese: "叉 燒 酥",
    categories: [Categories.All],
  },
  {
    name: "Baked Tapioca Pudding",
    image: CREME_BRULE,
    description:
      "A tapioca pudding with a caramelized surface and a very creamy texture.",
    jyutping: "sai1 mai5 bou3 din1",
    pinyin: "xī mǐ bù diàn",
    chinese: "西 米 布 甸",
    categories: [Categories.All],
  },
  {
    name: "Beancurd Sheet Roll with Duck Feet",
    image: DUCK_LEG_WRAP,
    description:
      "Tender duck feet wrapped with various items in a bean curd sheet. Depending on the dim sum establishment, you might find pork, mushrooms, and taro.",
    jyutping: "aap3 goek3 zaat3",
    pinyin: "yā jiǎo zhá",
    chinese: "鴨 腳 札",
    categories: [Categories.All],
  },
  {
    name: "Black Sesame Soup",
    image: SESAME_PUDDING,
    description:
      "Do not let its appearance put you off. This is a sweet dessert made from ground black sesame, rice, water, and syrup. Typically served hot, this soup-like dessert has a rich, savory, and complex taste.",
    jyutping: "zi1 maa4 wu4",
    pinyin: "zhī ma hú",
    chinese: "芝 麻 糊",
    categories: [Categories.All, Categories.Desserts],
  },
  {
    name: "Black Sesame Roll",
    image: SESAME_ROLL,
    description:
      "These soft and gelatinous rolls are made with ground black sesame. Unlike the related black sesame soup, this dessert is served cold.",
    jyutping: "",
    pinyin: "zhī ma juǎn",
    chinese: "芝 麻 卷",
    categories: [Categories.All, Categories.Desserts],
  },
];
