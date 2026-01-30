const questions = [
  {
    category: "Math",
    question: "1 + 1 = ?",
    choices: ["1", "2", "3"],
    answer: "2"
  },
  {
    category: "Math",
    question: "2 + 2 = ?",
    choices: ["2", "3", "4"],
    answer: "4"
  },
  {
    category: "Project Sekai",
    question: "Which unit is Hoshino Ichika in?",
    choices: ["MORE MORE JUMP!", "Leo/need", "Wonderlands x Showtime"],
    answer: "Leo/need"
  },
  {
    category: "Project Sekai",
    question: "Which character loves french fries?",
    choices: ["Tenma Saki", "Shinonome Akito", "Akiyama Mizuki"],
    answer: "Akiyama Mizuki"
  },
  {
    category: "General",
    question: "Who painted the Mona Lisa?",
    choices: ["Wolfgang Amadeus Mozart", "Mochizuki Honami", "Leonardo da Vinci"],
    answer: "Leonardo da Vinci"
  }
]

function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResults(question, choice) {
  if (choice == question.answer) return "The computer's choice is correct!";
  return "The computer's choice is wrong. The correct answer is: " + question.answer;
}