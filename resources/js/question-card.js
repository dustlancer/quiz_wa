
export { QuestionCard };



function QuestionCard(parent, question, total_questions, index) {
    this.parent = parent;
    this.question = question;
    this.componentId = "component-id";
    this.component = undefined;
    this.index = index;
    this.total_questions = total_questions;
    // console.log(parent);

    this.update_question = (q) => {
        this.index++;
        this.parent.classList.add('fade-out');
        setTimeout(() => {
            this.parent.innerHTML = '';
            this.parent.classList.remove('fade-out');
            this.question = q;
            this.render();
        }, 500);

    }

    this.getQuestionCountString = () => {
        return `${this.index + 1} вопрос из ${this.total_questions}`;
    }

    this.render = function(){
        let questions_c = document.createElement("p");
        questions_c.classList.add('text-white', 'font-light', 'text-lg', 'text-center', 'fade-in');
        questions_c.textContent = this.getQuestionCountString();

        let question = document.createElement("div");
        question.classList.add('question', 'text-3xl', 'text-white', 'font-bold', 'text-center', 'px-5', 'fade-in');
        question.textContent = this.question.text;


        this.parent.appendChild(questions_c);
        this.question_component = question;
        this.questions_c = questions_c;
        this.parent.appendChild(question);
        
        
        
    }

};
  



{/* <p class="text-white font-light text-lg">Вопрос <span id="question-number">5</span> из <span id="total-questions">20</span></p>
<div class="question text-3xl text-white font-bold text-center px-5">В каком году крестили Русь?</div>
       */}