const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

// const quiz = document.getElementById("quiz");
const question = document.querySelector('.question');
// const answerElements = document.querySelector('.answer');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitButton = document.querySelector("#submit");
const answers= document.querySelectorAll('.answer')
 
 let currentQuiz = 0;
//  let score = 0;

const loadQuiz = () =>
{
  const question = quizData[currentQuiz];
  question.innerHTML = quizData[0].question;
  a_text.innerHTML=question.a_text;
  b_text.innerHTML=question.b_text;
  c_text.innerHTML=question.c_text;
  d_text.innerHTML=question.d_text;

}
loadQuiz();

const getcheckanswer= () => {
  let answer;

  answer.forEach((currentanswe) => {
if(currentanswe.checked){
  answer   =currentanswe.id;
}
return answer;
  }
    
  );
}