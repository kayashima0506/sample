// const quiz = require("../quiz/quiz.json").quiz;

let quiz = [
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


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

let quizIndex = 0;
const quizLength = quiz.length;
let score = 0;

// 画面に問題文、選択肢を反映する
let setQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    } 
}
setQuiz();

// ボタンをクリックしたら正誤判定する
const clickHandler = (e) => {
    if (e.target.textContent === quiz[quizIndex].correct) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');
    }

    quizIndex++;
    if (quizIndex < quizLength) {
        setQuiz();
    } else {
        window.alert('終了! あなたのスコアは、' + score + '/' + quizLength + 'でした。');
    }

}
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}


