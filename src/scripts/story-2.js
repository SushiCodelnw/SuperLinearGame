// อากาซาวะ ชินทาโร่ ... อากาซาวะมันโซ
export const word_list_1 = [
  {
    character: "sushi",
    background: "street",
    speaker: "ชิน",
    word: "0",
  },
  {
    character: "SushiCodelnw",
    background: "street",
    speaker: "ชิน",
    word: "1",
    nextlist: "word_list_2",
  },
];

export const word_list_2 = [
  {
    character: "storekeeper",
    background: "street",
    speaker: "ชิน",
    word: "2",
    openChoices: {
      choice1: {
        character: "shin",
        background: "street",
        speaker: "ชิน",
        word: "เอาแหละฉันจะไปทางซ้าย",
        text: "ซ้าย",
        result: "word_list_1",
      },
      choice2: {
        character: "shin",
        background: "street",
        speaker: "ชิน",
        word: "เอาแหละฉันจะไปทางขวา",
        text: "ขวา",
        result: "word_list_2",
      },
    },
  },
];
