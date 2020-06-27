mutation createDimSum {
  createDimSum(input: {
    name: "Bean Curd Roll"
    fileName: "bean_curd_roll.jpg"
    description: "A steamed bun filled with barbecued flavored pork. A very popular and easily found dim sum item."
  	jyutping: "caa1 siu1 baau1"
    pinyin: "chā shāo bāo"
    chinese: "叉 燒 包"
    categories: [ALL, BUNS, POPULAR]
  }) {
    id
    name
    fileName
    description
    jyutping
    pinyin
    chinese
    categories
  }
}