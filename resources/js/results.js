
export { Results };

function Results(parent, answers_are_correct, quiz_cl) {
    this.quiz_cl = quiz_cl;
    this.parent = parent;
    this.wrapper_c = parent;
    this.answers_are_correct = answers_are_correct;
    this.correct_answers_count = this.answers_are_correct.filter(x => x===true).length;
    
    // console.log(answers_are_correct);

    this.cleanScreen = () => {
        wrapper.classList.add('fade-out');
        setTimeout(() => {
            wrapper.innerHTML = '';
            wrapper.classList.remove('fade-out');
        }, 500);
    }

    this.rateResult = (percentage) => {
        if (percentage===1) {
          return {caption: "Отлично!", emoji: '🥳'};
        } else if (percentage>=0.75) {
          return {caption: "Хорошо!", emoji: '😎'};
        } else if (percentage>=0.5) {
          return {caption: "Удовлетворительно", emoji: '🧐'};
        } else {
          return {caption: "Плохо", emoji: '🫠'};
        }
    }

    this.render = () => {
        this.result_rate = this.rateResult(this.correct_answers_count/this.answers_are_correct.length);
        // window.removeEventListener('answer', this.quiz_cl.handleAnswerEvent);
        let results_heading = document.createElement('div');

        results_heading.classList.add('font-bold', 'text-white', 'text-3xl', 'p-5', 'text-center');
        results_heading.textContent = 'Результат';

        this.parent.appendChild(results_heading);

        let glass_card = document.createElement('div');
        glass_card.classList.add('glassy', 'min-h-[70%]', 'flex', 'flex-col', 'items-center', 'justify-between', 'border-b-1', 'border-white', 'w-full', 'mx-3');
        let result_caption = document.createElement('div');
        result_caption.classList.add('result-phrase', 'text-3xl', 'text-white', 'font-bold', 'text-center', 'px-5', 'mt-2');

        let q_counter_string = `${this.correct_answers_count}/${this.answers_are_correct.length}`;
        result_caption.textContent = this.result_rate.caption;
        
        let emoji_comment = document.createElement('div');
        emoji_comment.classList = 'flex flex-col items-center';

        let q_counter = document.createElement('div');
        q_counter.classList.add('result', 'text-5xl', 'flex', 'flex-row', 'text-white', 'font-bold', 'text-center', 'my-7');
        
        q_counter.textContent = q_counter_string;

        let emoji_mark = document.createElement('div');
        emoji_mark.textContent = this.result_rate.emoji;
        emoji_mark.className = 'emoji-res';


        let actions_block = document.createElement('div');
        actions_block.classList.add('flex', 'w-full', 'flex-row', 'items-end', 'justify-end', 'font-medium', 'text-2xl');

        let share_button = document.createElement('div');
        share_button.className = 'flex rounded-lg border justify-center font-medium text-white border-1 border-cyan-300 p-3 m-3 w-1/2';
        share_button.textContent = 'Поделиться';


        let go_home_button = document.createElement('div');
        go_home_button.className = 'flex rounded-lg border justify-center font-medium text-white border-1 border-cyan-300 p-3 m-3 w-1/2';
        go_home_button.textContent = 'Домой';
        go_home_button.addEventListener('click', ()=> {
            window.dispatchEvent(new CustomEvent("change_route", {
              detail: {
                  route: "home",
              }
            }));
        });

        let restart_button = document.createElement('div');
        restart_button.className = 'flex rounded-lg border justify-center font-medium text-white border-1 border-cyan-300 p-3 m-3 w-1/2';
        restart_button.textContent = 'Перезапустить';
        
        actions_block.appendChild(share_button);
        actions_block.appendChild(go_home_button);
        // actions_block.appendChild(restart_button);

        emoji_comment.appendChild(emoji_mark);
        emoji_comment.appendChild(result_caption);
        glass_card.appendChild(q_counter);
        glass_card.appendChild(emoji_comment);
        
        glass_card.appendChild(actions_block);

        this,this.wrapper_c.classList.add('px-3');
        this.wrapper_c.appendChild(glass_card);

        // <div class="result-phrase text-3xl text-white font-bold text-center px-5">Превосходно!</div>
        

    }
};
