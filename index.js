const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer.isCorrect));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(isCorrect) {
    if (isCorrect) {
        // Implement your logic for correct answers
    } else {
        // Implement your logic for incorrect answers
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        // Quiz is completed
    }
}

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'London', isCorrect: false },
            { text: 'Paris', isCorrect: true },
            { text: 'Berlin', isCorrect: false },
            { text: 'Madrid', isCorrect: false }
        ]
    },
    {
        question: 'What is the capital of Italy?',
        answers: [
            { text: 'London', isCorrect: false },
            { text: 'Rome', isCorrect: true },
            { text: 'Berlin', isCorrect: false },
            { text: 'Madrid', isCorrect: false }
        ]
    },
    {
        question: 'What is the capital of Colombia?',
        answers: [
            { text: 'London', isCorrect: false },
            { text: 'Berlin', isCorrect: false },
            { text: 'Madrid', isCorrect: false },
            { text: 'Bogotá', isCorrect: true }
        ]
    },
    {
        question: 'What is the capital of Bangladesh?',
        answers: [
            { text: 'No se pai', isCorrect: true },
            { text: 'London', isCorrect: false },
            { text: 'Berlin', isCorrect: false },
            { text: 'Madrid', isCorrect: false }
        ]
    },
    // Add more questions here
];

startQuiz();
