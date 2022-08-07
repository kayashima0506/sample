let a=100;
let b=200;

let date = new Date();
console.log("今の日付",date);

const quiz = require("./quiz/quiz.json").quiz;
console.log(JSON.stringify(quiz));
console.log(quiz.length);
console.log(quiz[1].question);

let quiz2 = [
    {
        question: "海軍基地に磔になっていたゾロに、おにぎりをあげた少女の名前は次の内どれ。",
        answers: [
            'リカ', 'リサ', 'リナ', 'リラ'
        ],
        correct: 'リカ'
    },
    {
        question: "1+2=",
        answers: [
            '1', '2', '3', '4'
        ],
        correct: '3'
    },
    {
        question: "じゃんけんでグーに勝つのは？",
        answers: [
            'グー', 'チョキ', 'パー', 'チョコ'
        ],
        correct: 'パー'
    }
];

console.log(JSON.stringify(quiz2));
console.log(quiz2.length);
console.log(quiz2[1].question);
