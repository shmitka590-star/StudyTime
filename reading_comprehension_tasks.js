const readingComprehensionTasks = [
  {
    "id": 1,
    "title": "The Lost Puppy",
    "difficulty": "easy",
    "passage": "Maya found a small brown puppy sitting outside her house. It had no collar and looked very sad. She gave it some water and a piece of bread. The puppy wagged its tail happily. Maya decided to keep it and named it Buddy. She called her mum to ask if they could look after the puppy.",
    "questions": [
      {
        "type": "literal",
        "q": "What colour was the puppy?",
        "options": [
          "white",
          "brown",
          "black",
          "grey"
        ],
        "a": "brown"
      },
      {
        "type": "literal",
        "q": "What did Maya give the puppy?",
        "options": [
          "milk and biscuits",
          "water and bread",
          "meat and rice",
          "cheese and crackers"
        ],
        "a": "water and bread"
      },
      {
        "type": "literal",
        "q": "What name did Maya give the puppy?",
        "options": [
          "Max",
          "Buddy",
          "Charlie",
          "Spot"
        ],
        "a": "Buddy"
      },
      {
        "type": "inference",
        "q": "Why did the puppy wag its tail?",
        "options": [
          "it was scared",
          "it was happy",
          "it was angry",
          "it was tired"
        ],
        "a": "it was happy"
      },
      {
        "type": "inference",
        "q": "What does this tell us about Maya?",
        "options": [
          "she is mean",
          "she is kind",
          "she is lazy",
          "she is shy"
        ],
        "a": "she is kind"
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = readingComprehensionTasks;
}