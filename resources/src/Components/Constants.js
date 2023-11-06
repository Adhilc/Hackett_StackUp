export const jsQuizz = {
    questions: [
      {
        question:
          "What is internet?",
        choices: [
          "A network of interconnected local area networks",
          "A collection of unrelated computers",
          "Interconnection of wide area networks",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Interconnection of wide area networks",
      },
      {
        question: "Which of the following is not a part of 5-tuple finite automata?",
        choices: [
          "Input alphabet",
          "Transition function",
          "Initial State",
          "Output Alphabet",
        ],
        type: "MCQs",
        correctAnswer: "Output Alphabet",
      },
      {
        question:
          "What is DBMS?",
        choices: ["DBMS is a collection of queries", "DBMS is a high-level language", "DBMS is a programming language", "DBMS stores, modifies and retrieves data"],
        type: "MCQs",
        correctAnswer: "DBMS stores, modifies and retrieves data",
      },
      {
        question: "Find the number of ways of arranging the letters of the words DANGER, so that no vowel occupies odd place",
        choices: ["36", "48", "144", "96"],
        type: "MCQs",
        correctAnswer: "144",
      },
      {
        question: "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
        choices: [
          "Priority",
          "Round Robin",
          "Shortest Job First",
          "All of the mentioned",
        ],
        type: "MCQs",
        correctAnswer: "All of the mentioned",
      },
    ],
  };

  export const resultInitalState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  };