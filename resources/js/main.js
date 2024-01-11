'use strict';


import { QuestionCard } from './question-card.js';
import { Answer } from './answers.js';
import { Results } from './results.js';

const SCREEN_WIDTH = window.innerWidth;

const questions = [
    {
        text: "Меня kak зовут?",
        answers: [
            {text: "Anton"},
            {text: "Andrey"},
            {text: "Nikolay"},
        ],
        correct_answer_index: 1,
    },
    {
        text: "2 + 2 = ?",
        answers: [
            {text: "1"},
            {text: "35"},
            {text: "4"},
        ],
        correct_answer_index: 2,
    },
    {
        text: "10 - 4 = ?",
        answers: [
            {text: "65"},
            {text: "6"},
            {text: "1"},
        ],
        correct_answer_index: 1,
    },
    {
        text: "6 x 6 = ",
        answers: [
            {text: "36"},
            {text: "12"},
            {text: "0"},
        ],
        correct_answer_index: 0,
    },
];

// варианты ответа на текущий вопрос
let answers = [];
// Тут пишем правильно ил нет ответил на каждый вопрос
let answersAreCorrect = [];

let question_ind = 0;

let question_block = document.querySelector('.question-block');
let answer_options = document.querySelector('.answer-options');
let bebra = document.querySelector('.bebra');
let wrapper_component = document.querySelector('.wrapper');
// console.log(bebra);


window.addEventListener("answer", (e) => {
    console.log("answer ind = " + e.detail.answer_ind);
    let chosen_answer_ind = e.detail.answer_ind;
    let answerIsCorrect = (chosen_answer_ind === questions[question_ind].correct_answer_index);
    answers[chosen_answer_ind].displayCorrectOrNot(answerIsCorrect);
    answersAreCorrect.push();
    
    setTimeout(()=> {
        if (!answerIsCorrect) { zoomCorrectAnswer(); }
    }, 300);
    

    if(question_ind+1 === questions.length) {
        console.log("Всё!");
        return;
    }
    setTimeout(()=> {
        question_ind++;
        // обновляем вопрос и варианты ответов на него
        q.update_question(questions[question_ind]);
        removeAnswers();
        setTimeout(() => {
            displayAnswers();
        },500);

    }, 2000);

    
    

});

// -----------
window.addEventListener('restart', (e) => {
    alert('quiz will be restarted');
    cleanScreen();
    startQuiz();
});



bebra.addEventListener("click", ()=> {
    cleanScreen();

    setTimeout(() => {
        console.log(wrapper_component);
        let res = new Results(gamecontainer);
        res.render();
    }, 700);
    
});


let displayAnswers = () => {
    for (let i = 0; i < questions[question_ind].answers.length; i++) {
        let answer_text = questions[question_ind].answers[i].text;
        let answer_card = new Answer(answer_options, answer_text, i);
        answers.push(answer_card);
        answer_card.render();
    }    
}

let removeAnswers = () => {
    let answer_components = document.querySelectorAll('.answer-option');
    // console.log(answer_components.length);
    
    answer_components.forEach(a => {
        a.classList.add('fade-out');
    });
    setTimeout(()=> {
        answer_options.innerHTML = '';
    }, 500);
    
    answers = [];
}

let zoomCorrectAnswer = () => {
    let answer_components = document.querySelectorAll('.answer-option');
    answer_components[questions[question_ind].correct_answer_index].classList.add('zoom', 'correct-answer');
}


let startQuiz = () => {
    question_ind = 0;
    let question_block = document.createElement('div');
    question_block.className = 'question-block flex flex-col items-center justify-center border-b-1 border-white py-[55px]';
    let answer_options = document.createElement('div');
    answer_options.className = 'answer-options overflow-y-scroll container-fluid';
    gamecontainer.appendChild(question_block);
    gamecontainer.appendChild(answer_options);
    let q = new QuestionCard(question_block, questions[question_ind], questions.length, question_ind);
    q.render();

    displayAnswers();   
};


startQuiz();





let cleanScreen = () => {
    gamecontainer.classList.add('fade-out');
    setTimeout(() => {
        gamecontainer.innerHTML = '';
        gamecontainer.classList.remove('fade-out');
    }, 500);
}


let todoSubmit = document.querySelector('.todoSubmit');
let todos = document.querySelector('.todos');


