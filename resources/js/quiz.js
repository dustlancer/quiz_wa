import { QuestionCard } from './question-card.js';
import { Answer } from './answers.js';
import { Results } from './results.js';

export { Quiz };


function Quiz(questions) {
    this.stamp = new Date().toLocaleString();
    this.questions = questions;
    this.answers = [];
    this.question_ind = 0;
    this.answers = [];
    this.question_card = undefined;
    this.answer_options = undefined;
    
    // Тут пишем правильно ил нет ответил на каждый вопрос
    this.answersAreCorrect = [];
    console.log("init_question_ind: "+this.question_ind);
    console.log("init_questions_length: "+this.questions.length);
    console.log("init_stamp: "+this.stamp);

    
    this.initEventListeners = () => {

        window.addEventListener("answer", (e) => this.handleAnswerEvent(e));


        window.addEventListener('restart', (e) => {
            alert('quiz will be restarted');
            this.cleanScreen();
            this.startQuiz();
        });
    }

    this.handleAnswerEvent = (e) => {
        if (this.stamp === '') {return;}
        console.log('['+ this.stamp +']: you answered ' + this.question_ind + " of " + this.questions.length);
            let chosen_answer_ind = e.detail.answer_ind;
            let answerIsCorrect = (chosen_answer_ind === this.questions[this.question_ind].correct_answer_index);
            this.answers[chosen_answer_ind].displayCorrectOrNot(answerIsCorrect);
            this.answersAreCorrect.push(answerIsCorrect);
            
            setTimeout(()=> {
                if (!this.answerIsCorrect) { this.zoomCorrectAnswer(); }
            }, 300);
            
        
            if(this.question_ind+1 === this.questions.length) {
                // console.log(this.stamp + "---> " + (this.question_ind+1) + '/' + this.questions.length);
                this.stamp = '';
                this.cleanScreen();
                setTimeout(() => {
                    let res = new Results(wrapper, this.answersAreCorrect, this);
                    res.render();
                }, 700);
                return;
            }
            setTimeout(()=> {
                this.question_ind++;
                // обновляем вопрос и варианты ответов на него
                this.question_card.update_question(this.questions[this.question_ind]);
                this.removeAnswers();
                setTimeout(() => {
                    this.displayAnswers();
                },500);
        
            }, 2000);
    }


    this.displayAnswers = () => {
        let parent = this.answer_options;
        for (let i = 0; i < this.questions[this.question_ind].answers.length; i++) {
            let answer_text = this.questions[this.question_ind].answers[i].text;
            let answer_card = new Answer(parent, answer_text, i);
            this.answers.push(answer_card);
            answer_card.render();
        }    
    }

    this.removeAnswers = () => {
        let answer_components = document.querySelectorAll('.answer-option');        
        answer_components.forEach(a => {
            a.classList.add('fade-out');
        });
        setTimeout(()=> {
            this.answer_options.innerHTML = '';
        }, 500);
        
        this.answers = [];
    }

    this.cleanScreen = () => {
        wrapper.classList.add('fade-out');
        setTimeout(() => {
            wrapper.innerHTML = '';
            wrapper.classList.remove('fade-out');
        }, 500);
    }

    this.zoomCorrectAnswer = () => {
        let answer_components = document.querySelectorAll('.answer-option');
        answer_components[this.questions[this.question_ind].correct_answer_index].classList.add('zoom', 'correct-answer');
    }

    this.startQuiz = () => {
        // this.question_ind = 0; 
        this.render();
        this.initEventListeners();
    };

    this.render = () => {
        let top_bar = document.createElement('div');
        top_bar.className = "top-bar flex flex-row items-center justify-between p-3";
        wrapper.appendChild(top_bar);

        let question_block = document.createElement('div');
        question_block.className = 'question-block flex flex-col items-center justify-center border-b-1 border-white py-[55px]';
        let answer_options = document.createElement('div');
        answer_options.className = 'mx-3 h-full flex flex-col items-center pt-3 px-3 overflow-auto justify-start border-b-1 border-white text-white w-full';
        wrapper.appendChild(question_block);
        wrapper.appendChild(answer_options);

        let question_card = new QuestionCard(question_block, this.questions[this.question_ind], this.questions.length, this.question_ind);
        this.question_card = question_card;
        question_card.render();
        this.answer_options = answer_options;
        this.displayAnswers(answer_options);
    }


}