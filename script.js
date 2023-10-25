const questions = [

    {

        question: 'I am taken from a mine and shut up in a wooden case from which I am never released, and yet I am used by almost every person. What am I?',

        answers: [

            { text: 'fire', correct: false },

            { text: 'air', correct: false },

            { text: 'gold', correct: true },

            { text: 'diamond', correct: false }

        ]

    },

    {

        question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?',

        answers: [

            { text: 'music', correct: false },

            { text: 'eco', correct: true },

            { text: 'whisper', correct: false },

            { text: 'lightning', correct: false }

        ]

    },

    {

        question: 'Who is the current president of USA?',

        answers: [

            { text: 'Obama', correct: false },

            { text: 'Abram linken', correct: false },

            { text: 'Joe Biden', correct: true },

            { text: 'Donald Trump', correct: false }

        ]

    },

];


let questionCounter = 0;

let score = 0;

let currentQuestion;


function startQuiz() {

    document.getElementById('start-buttom').classList.add('hide');

    document.getElementById('question-container').classList.remove('hide');

    getQuestion();

}


function getQuestion() {

    currentQuestion = questions[questionCounter];

    document.getElementById('question').innerText = currentQuestion.question;


    let answerButtonContainer = document.getElementById('answer-buttons');

    answerButtonContainer.innerHTML = '';


    currentQuestion.answers.forEach((answer, index) => {

        let button = document.createElement('button');

        button.innerText = answer.text;

        button.classList.add('btn');

        button.setAttribute('data-index', index);

        button.onclick = selectAnswer;

        answerButtonContainer.appendChild(button);

    });

}


function selectAnswer(e) {

    let selectedIndex = e.target.getAttribute('data-index');

    let correct = currentQuestion.answers[selectedIndex].correct;

    setStatusClass(document.body, correct);


    if (correct) {

        score++;

    }


    questionCounter++;


    if (questionCounter < questions.length) {

        getQuestion();

    } else {

        document.getElementById('next-buttom').classList.add('hide');

        document.getElementById('score-container').classList.remove('hide');

        document.getElementById('score').innerText = score;

    }

}


function setStatusClass(element, correct) {

    if (correct) {

        element.classList.add('correct');

    } else {

        element.classList.add('wrong');

    }

    setTimeout(() => {

        element.classList.remove('correct');

        element.classList.remove('wrong');

    }, 300);

}


document.getElementById('start-buttom').onclick = startQuiz;

document.getElementById('next-buttom').onclick = getQuestion;
