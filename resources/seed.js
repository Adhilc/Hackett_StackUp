import {initializeApp} from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyAn6PTJqvr6yng3QpBN9-y5rmrmyISOOmQ",
  authDomain: "my-quiz-ae1ed.firebaseapp.com",
  projectId: "my-quiz-ae1ed",
  storageBucket: "my-quiz-ae1ed.appspot.com",
  messagingSenderId: "19829245690",
  appId: "1:19829245690:web:1aa2f647ccd3230efdeb43",
  measurementId: "G-E11E4K2NBK"
};

export const Firebase = initializeApp(firebaseConfig);

export const db = getFirestore(Firebase);


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
    ]
  }
  ;




jsQuizz.questions.forEach(async (question) => {
    const prodtAdd = await addDoc(collection(db,"Questions"),{
        question:question.question,
        choices:question.choices,
        correctAnswer: question.correctAnswer
    })

    console.log(prodtAdd)
})

console.log("completed")
