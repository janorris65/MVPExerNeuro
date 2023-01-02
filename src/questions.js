let questArray = [];
let cardQuestArray = [];
let wordsSynonymsAntonymsDefineQuestArray = [];
let mathBasicQuestionsArray = [];
let mathStrategyQuestionsArray = [];
let literatureQuestionsArray = [];
class Questions {
  constructor(title, instructions, answerCount) {
    this.title = title;
    this.instructions = instructions;
    this.answerCount = answerCount;
  }
  getTitle() {
    return this.title;
  }
  getInstructions() {
    return this.instructions;
  }
  getanswerCount() {
    return this.answerCount;
  }
}
class CardQuestions extends Questions {
  constructor(title, instructions, answerCount, componentArray) {
    super(title, instructions, answerCount);
    this.componentArray = componentArray;
  }

  getDisplay() {
    const cardArray = this.componentArray.map(
      (element) => `<p id="array"> ${element} <p>`
    );
    const cardArrayFinal = cardArray.join(" ");
    return cardArrayFinal;
  }

  //return console.log(displayArray);
}

let Cards1 = new CardQuestions("Memory Card", "Memorize the Cards", 1, [
  "A of Spades",
  "A of Hearts",
  "A of Diamonds",
]);
cardQuestArray.push(Cards1);
let Card2 = new CardQuestions("Memory Card", "Memorize the Cards", 1, [
  "7 of Diamonds",
  "4 of Hearts",
  "8 of Diamonds",
  "7 of Clubs",
]);
cardQuestArray.push(Card2);
let Card3 = new CardQuestions("Memory Card", "Memorize the Cards", 1, [
  "9 of Diamonds",
  "9 of Hearts",
  "8 of Spades",
  "J of Clubs",
]);
cardQuestArray.push(Card3);
let Card4 = new CardQuestions("Memory Card", "Memorize the Cards", 1, [
  "K of Spades",
  "A of Hearts",
  "8 of Diamonds",
  "2 of Clubs",
]);
cardQuestArray.push(Card4);
let Card5 = new CardQuestions("Memory Card", "Memorize the Cards", 1, [
  "J of Clubs",
  "5 of Diamonds",
  "9 of Diamonds",
  "Q of Clubs",
]);
cardQuestArray.push(Card5);

class WordQuestions extends Questions {
  constructor(title, instructions, answerCount, componentArray) {
    super(title, instructions, answerCount);
    this.componentArray = componentArray;
  }

  getDisplay() {
    const wordArray = this.componentArray.map(
      (element) => `<p id="array"> ${element} <p>`
    );
    const wordArrayFinal = wordArray.join(" ");
    return wordArrayFinal;
    //return console.log(displayArray);
  }
}
let Word1 = new WordQuestions("Word Synonyms", "Continue the synonyms", 1, [
  "Animation",
  "Energy",
  "Fieriness",
  "Dedication",
]);
wordsSynonymsAntonymsDefineQuestArray.push(Word1);
let Word2 = new WordQuestions("Word Synonyms", "Continue the synonyms", 1, [
  "Abundance",
  "Glut",
  "Surplus",
  "Masses",
]);
wordsSynonymsAntonymsDefineQuestArray.push(Word2);
let Word3 = new WordQuestions("Word Synonyms", "Continue the synonyms", 1, [
  "Calm",
  "Peaceful",
  "Prosperous",
  "Affluent",
]);
wordsSynonymsAntonymsDefineQuestArray.push(Word3);
let Word4 = new WordQuestions("Word Antonyms", "Continue the Antonyms", 1, [
  "Linear",
  "Straight",
  "Direct",
]);
wordsSynonymsAntonymsDefineQuestArray.push(Word4);
let Word5 = new WordQuestions("Word Antonyms", "Continue the Antonyms", 1, [
  "Prove",
  "Validate",
  "Determine",
  "Establish",
]);
wordsSynonymsAntonymsDefineQuestArray.push(Word5);
let Word6 = new WordQuestions("Word Antonyms", "Continue the Antonyms", 1, [
  "Beneficial",
  "Benign",
  "Harmless",
  "Useful",
]);
wordsSynonymsAntonymsDefineQuestArray.push(Word6);
let Word7 = new WordQuestions(
  "Word Creativity",
  "Envision what these words describe and describe more of it",
  1,
  ["Open", "Antiquated", "Green", "Breeze"]
);
wordsSynonymsAntonymsDefineQuestArray.push(Word7);
let Word8 = new WordQuestions(
  "Word Creativity",
  "Envision what these words describe and describe more of it",
  1,
  ["Tremors", "Distrustful", "Sharp", "Brazen"]
);
wordsSynonymsAntonymsDefineQuestArray.push(Word8);
let Word9 = new WordQuestions(
  "Word Creativity",
  "Envision what these words describe and describe more of it",
  1,
  ["Book", "Timeline", "Ordinary", "Beige"]
);
wordsSynonymsAntonymsDefineQuestArray.push(Word9);
let Word10 = new WordQuestions(
  "Word Creativity",
  "Envision what these words describe and describe more of it",
  1,
  ["Special", "Lost", "Found", "Determination"]
);
wordsSynonymsAntonymsDefineQuestArray.push(Word10);

class MathQuestions extends Questions {
  constructor(title, instructions, answerCount, componentArray) {
    super(title, instructions, answerCount);
    this.componentArray = componentArray;
  }

  getDisplay() {
    const mathArray = this.componentArray.map(
      (element) => `<p id="array"> ${element} <p>`
    );
    const mathArrayFinal = mathArray.join(" ");
    return mathArrayFinal;
  }
}
let Math1 = new MathQuestions(
  "Math Subtraction",
  "Continue substracting the smaller from the larger",
  1,
  [785, 6]
);
mathBasicQuestionsArray.push(Math1);
let Math2 = new MathQuestions(
  "Math Subtraction",
  "Continue substracting the smaller from the larger",
  1,
  [657, 13]
);
mathBasicQuestionsArray.push(Math2);
let Math3 = new MathQuestions(
  "Math Addition",
  "Continue adding the smaller to the larger",
  1,
  [88, 22]
);
mathBasicQuestionsArray.push(Math3);
let Math4 = new MathQuestions(
  "Math Addition",
  "Continue adding the smaller to the larger",
  1,
  [101, 17]
);
mathBasicQuestionsArray.push(Math4);
let Math5 = new MathQuestions(
  "Math Estimation",
  "Analyze what may make a difference in route time",
  1,
  ["10 miles with 5 stops", "5 miles with 10 stops"]
);
mathStrategyQuestionsArray.push(Math5);
let Math6 = new MathQuestions(
  "Math Estimation",
  "Analyze what may make a difference in build efficiency",
  1,
  ["A two story house built with 10 builders", "A shed built with one builder"]
);
mathStrategyQuestionsArray.push(Math6);
let Math7 = new MathQuestions(
  "Math Estimation",
  "Analyze what may make a difference in expenses",
  1,
  [
    "100 guests in one month with company money",
    "10 guests in a week with your money",
  ]
);
mathStrategyQuestionsArray.push(Math7);
let Math8 = new MathQuestions(
  "Math Estimation",
  "Analyze what may make a difference in resource allocation",
  1,
  [
    "25% chance of rain on a one day journey",
    "25% chance of rainy days on a month journey",
  ]
);
mathStrategyQuestionsArray.push(Math8);
let Math9 = new MathQuestions(
  "Math Estimation",
  "Analyze what may make a difference in project planning",
  1,
  ["Experienced people in a new endeavor", "New people in a routine endeavor"]
);
mathStrategyQuestionsArray.push(Math9);
let Math10 = new MathQuestions(
  "Math Estimation",
  "Analyze what may make a difference in risk assessment",
  1,
  [
    "Proven components at twice the cost",
    "New components but you set the price",
  ]
);
mathStrategyQuestionsArray.push(Math10);
class LiteratureQuestions extends Questions {
  constructor(title, instructions, answerCount, componentArray) {
    super(title, instructions, answerCount);
    this.componentArray = componentArray;
  }

  getDisplay() {
    const litArray = this.componentArray.map(
      (element) => `<p id="array"> ${element} <p>`
    );
    const litArrayFinal = litArray.join(" ");
    return litArrayFinal;
  }
}
let Lit1 = new LiteratureQuestions(
  "Literature",
  "Assess the meaning of the quote",
  1,
  [
    "“The world breaks everyone, and afterward, many are strong at the broken places.” —Ernest Hemingway, A Farewell to Arms",
  ]
);
literatureQuestionsArray.push(Lit1);
let Lit2 = new LiteratureQuestions(
  "Literature",
  "Assess the meaning of the quote",
  1,
  [
    "“Anyone whoever gave you confidence, you owe them a lot.” —Truman Capote, Breakfast at Tiffany’s",
  ]
);
literatureQuestionsArray.push(Lit2);
let Lit3 = new LiteratureQuestions(
  "Literature",
  "Assess the meaning of the quote",
  1,
  [
    "“Hoping for the best, prepared for the worst, and unsurprised by anything in between.” —Maya Angelou, I Know Why the Caged Bird Sings",
  ]
);
literatureQuestionsArray.push(Lit3);
let Lit4 = new LiteratureQuestions(
  "Literature",
  "Assess the meaning of the quote",
  1,
  [
    "“Real courage is when you know you’re licked before you begin, but you begin anyway and see it through no matter what.” —Harper Lee, To Kill a Mockingbird",
  ]
);
literatureQuestionsArray.push(Lit4);
export const One = cardQuestArray;
export const Two = wordsSynonymsAntonymsDefineQuestArray;
export const Three = mathBasicQuestionsArray;
export const Four = mathStrategyQuestionsArray;
export const Five = literatureQuestionsArray;
