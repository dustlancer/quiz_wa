
function Answer(parent, text, id) {
    this.parent = parent;
    this.text = text
    this.id = id;
    this.componentId = id;
    this.component = undefined;
    // this.question_block = document.querySelector()

    this.onClickHandler = () => {
        window.dispatchEvent(new CustomEvent("answer", {
            detail: {
                answer_ind: this.id,
            }
        }));
    };

    this.displayCorrectOrNot = function(isCorrect) {
        if (isCorrect===true) {
            this.component.classList.add('correct-answer');
        } else {
            this.component.classList.add('incorrect-answer');
        }
    }

    this.render = function(){
        let answer_card = document.createElement("div");
        answer_card.className = ('answer-option glassy flex flex-row items-center justify-between w-full p-3 px-5 my-1');
        
        
        let answer_text = document.createElement("p");
        answer_text.classList.add('answer-text', 'ml-2');
        answer_text.textContent = this.text;

        answer_card.appendChild(answer_text);
        answer_card.addEventListener('click', this.onClickHandler);

        

        this.parent.appendChild(answer_card);
        this.component = answer_card;
    }
};


export { Answer };

{/* <div class="answer-option flex rounded-lg border font-medium text-white border-1 border-cyan-300 p-3 m-3">
        <b class="answer-mark">A.</b><p class="answer-text ml-2">Это один вариант ответа один вариант ответа один вариант ответа один вариант ответа</p>
</div> */}