// 'use strict';


import { HomeScreen } from "./home-screen.js";
import { LoginCard } from "./login.js";
import { ProfileScreen } from "./components/profile/profile.js";


const SCREEN_WIDTH = window.innerWidth;



const quiz1 = [
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

let quizes_list = [
    {name: "math",
    content:
        [
            {
                text: "2 + 2 = ?",
                answers: [
                    {text: "1"},
                    {text: "35"},
                    {text: "4"},
                ],
                correct_answer_index: 2,
            },
        ]
    },
    {name: "math",
    content:
        [
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
        ]
    },
    {name: "math",
    content:
        [
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
        ]
    },
    {name: "math",
    content:
        [
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
        ]
    },
    {name: "math",
    content:
        [
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
        ]
    },
    {name: "math",
    content:
        [
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
        ]
    },
    {name: "math",
    content:
        [
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
        ]
    },
    {name: "math",
    content:
        [
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
        ]
    },
    {name: "math",
    content:
        [
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
        ]
    },
    {name: "math",
    content:
        [
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
        ]
    },
    {name: "math",
    content:
        [
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
        ]
    },
    {name: "math",
    content:
        [
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
        ]
    },
]



let cleanScreen = () => {
    wrapper.classList.add('fade-out');
    setTimeout(() => {
        wrapper.innerHTML = '';
        wrapper.classList.remove('fade-out');
    }, 500);
}


let forAuthenticated = () => {
    let home_screen = new HomeScreen(wrapper, quizes_list);

}

window.addEventListener('login_success', () => {
    cleanScreen();
    setTimeout(() => {
        forAuthenticated();
    }, 500);
});



sessionStorage.removeItem("username");

// router 


window.addEventListener('change_route', (e)=> {
    cleanScreen();
    setTimeout(() => {
        if (sessionStorage.getItem("username")) {
            switch (e.detail.route)  {
                case 'home':
                    let home_screen = new HomeScreen(wrapper, quizes_list);
                    break;
                case 'profile':
                    let profile_screen = new ProfileScreen(wrapper);
                    break;
                case 'about':
                    alert('route set to about');
                    break;
                default:
                    alert('route not found');
            }
        } else {
            let login_screen = new LoginCard(wrapper);
        }
        
    }, 500);
})


let forNonAuthenticated = () => {
    let cont = document.createElement('div');
    let heading = document.createElement('div');
    heading.textContent = 'Вы не авторизованы. Войти.'
    

    heading.addEventListener('click', ()=> {
        cleanScreen();
        setTimeout(() => {
            let lc = new LoginCard(wrapper);
            lc.render();
        }, 500);
    })
    wrapper.append(heading);
}


// sessionStorage.removeItem("username");
// if (sessionStorage.getItem("username")) {
//     // Restore the contents of the text field
//     // alert(sessionStorage.getItem("username"));
//     forAuthenticated();
// } else {
//     forNonAuthenticated();
// }











forAuthenticated();


// window.location.href = './ret.html';









