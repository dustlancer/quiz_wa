
export { QuizList };
import { Quiz } from "./quiz.js";

function QuizList(parent, quizes_list) {
    this.parent = parent;
    //console.log(this.parent);
    this.quizes = quizes_list;

    this.cleanScreen = () => {
        wrapper.classList.add('fade-out');
        setTimeout(() => {
            wrapper.innerHTML = '';
            wrapper.classList.remove('fade-out');
        }, 500);
    }

    this.initEventListeners = () => {
        window.addEventListener('show_quiz_list', (e) => {
            this.cleanScreen();
            setTimeout(() => {
                this.render();
            }, 700);
        })
    }

    this.render = () => {


        let quizlist_header = document.createElement('div');
        quizlist_header.className = 'top-bar flex flex-row items-center justify-center font-medium text-white text-2xl p-3 py-0 -mt-5';
        quizlist_header.textContent = 'Каталог';
        let quiz_list = document.createElement('div');
        quiz_list.className = 'mx-3 h-full flex flex-col items-center justify-center border-b-1 border-white text-white';
        
        

        this.parent.appendChild(quizlist_header);
        let quiz_list_c = document.createElement('div');
        quiz_list_c.className = 'mx-3 h-full flex flex-col items-center pt-0 px-3 overflow-auto justify-start border-b-1 border-white text-white w-full';

    
        for (let i = 0; i < this.quizes.length; i++) {
            let quiz_row = document.createElement('div');
            quiz_row.className = 'glassy flex flex-row items-center justify-between w-full p-3 px-5 my-1';
            let quiz_name = document.createElement('p');
            quiz_name.className = 'font-medium';
            quiz_name.textContent = this.quizes[i].name;
            let difficulty = document.createElement('p');
            difficulty.textContent = 'сложность';

            quiz_row.appendChild(quiz_name);
            quiz_row.appendChild(difficulty);
            quiz_row.addEventListener('click', () => {
                this.cleanScreen();
                setTimeout(() => {
                    // var q = null;
                    // window.q = 123;
                    if (window.q!==null) {
                        window.q = null
                        if (window.q!==null) {
                            console.log('q was deleted');
                        }
                    }
                    // console.log(window.q);
                    window.q = new Quiz(this.quizes[i].content);
                    window.q.startQuiz();
                }, 700);
            })
            quiz_list_c.appendChild(quiz_row);
        }

        this.parent.appendChild(quiz_list_c);
    }
}
