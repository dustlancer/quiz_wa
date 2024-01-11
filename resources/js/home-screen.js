export {HomeScreen};

import { TopBar } from "./topbar.js";
import { QuizList } from "./quizlist.js";
import { NewQuizes } from "./new_quizes.js";

class HomeScreen  {
    constructor(parent, quizes_list) {
        this.parent = parent;
        this.quizes = quizes_list;
        this.render()
    }
    
    render() {
        let top_bar = new TopBar(wrapper);
        top_bar.render();

        let news_carousel = new NewQuizes(wrapper, this.quizes);
        news_carousel.render();

        let _list = new QuizList(wrapper, this.quizes);
        _list.initEventListeners();
        _list.render();
    }
}
