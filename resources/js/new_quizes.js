export { NewQuizes };

function NewQuizes(parent, new_quizes) {
    this.quizes = new_quizes;
    this.parent = parent;

    this.render = () => {
        let carousel_container = document.createElement('div');
        let title = document.createElement('div');
        title.className = 'text-white m-3 font-medium text-2xl mb-0';
        title.textContent = 'Новые квизы';
        
        let carousel = document.createElement('div');
        carousel.className = 'cards-carousel flex flex-row w-screen overflow-x-auto';

        for (let i = 0; i < 4; i++) {
            let quiz_card = document.createElement('div');
            quiz_card.className = 'card glassy relative m-3 mx-2';
            let card_img = document.createElement('img');
            card_img.src = './resources/images/sport1.jpg';
            card_img.className = 'card-image';

            let card_text = document.createElement('div');
            card_text.className = 'card-text';
            card_text.textContent = 'Математика'

            quiz_card.append(card_img, card_text);
            quiz_card.addEventListener('click', () => {
                alert('got click on newbie!');
            })
            carousel.append(quiz_card);
        }

        carousel_container.append(title);
        carousel_container.append(carousel);
        this.parent.append(carousel_container);
    }
}