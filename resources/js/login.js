
export {LoginCard};

class LoginCard {
    constructor(parent) {
        this.parent = parent;
        this.render();

    }
    

    handleSubmit(username, psw) {
        if (username === '') {
            alert('Введите имя и пароль!');
            return;
        }
        
        // пока пользователь авторизуется автоматически
        sessionStorage.setItem("username", username);
        if (sessionStorage.getItem("username")) {
            // Restore the contents of the text field
            // alert(sessionStorage.getItem("username"));
            window.dispatchEvent(new CustomEvent("login_success"));
        }
    };

    render() {
        let logo_header = document.createElement('div');
        logo_header.className = 'flex flex-row items-center justify-center font-bold text-white text-3xl p-5';
        logo_header.textContent = 'Quizzy🧐';

        let glass_card = document.createElement('div');
        glass_card.className = 'auth-card glassy mx-3 min-h-[70%] flex flex-col items-center justify-center border-b-1 border-white px-5';

        let login_form = document.createElement('form');
        login_form.className = 'space-y-4 md:space-y-6 w-full text-center flex flex-col items-center';

        let operation_heading = document.createElement('div');
        operation_heading.className = 'flex flex-row items-center justify-center font-bold text-white text-3xl p-5';
        operation_heading.textContent = 'Авторизация';

        let username_wrapper = document.createElement('div');
        username_wrapper.className = 'w-full mb-2';

        let username_label = document.createElement('label');
        username_label.className = 'block mb-2 text-sm font-medium text-white text-start';
        username_label.textContent = 'Юзернейм';

        let username_input = document.createElement('input');
        username_input.className = 'auth-input bg-indigo-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5';
        username_input.placeholder = 'имя';

        username_wrapper.append(username_label, username_input);

        let psw_wrapper = document.createElement('div');
        psw_wrapper.className = 'w-full';

        let psw_label = document.createElement('label');
        psw_label.className = 'block mb-2 text-sm font-medium text-white text-start';
        psw_label.textContent = 'Пароль';

        let psw_input = document.createElement('input');
        psw_input.className = 'auth-input bg-indigo-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5';
        psw_input.placeholder = '******';

        username_wrapper.append(username_label, username_input);
        psw_wrapper.append(psw_label, psw_input);

        let login_button = document.createElement('button');
        login_button.className = 'flex rounded-lg border justify-center font-medium bg-transparent text-white border-1 border-cyan-300 p-3 m-2 w-1/2 hover:bg-blue-500 transition:color mt-5';
        login_button.textContent = 'Войти';
        login_button.addEventListener('click', ()=>{
            this.handleSubmit(username_input.value, psw_input.value);
        })



        glass_card.append(operation_heading);
        glass_card.append(username_wrapper, psw_wrapper, login_button);

        this.parent.append(logo_header);
        this.parent.append(glass_card);

    }
}