const questionContainer = document.querySelector('#quiz-container');
const question = document.querySelector('#question');
const answerButtons = document.querySelector('#answer-buttons');

// Función para dar inicio a la actividad

// Función para mostrar la pregunta y sus opciones de respuesta

let questionIndex = 0
let corrects = 0

function showQuestion() {
    question.innerText = questions[questionIndex].pregunta
    answerButtons.innerHTML = '';

    questions[questionIndex].opciones.forEach(x => {
        const button = document.createElement('button')
        button.classList.add('btn')
        button.innerText = x.text
        answerButtons.append(button)
        button.addEventListener('click', () => {selectAnswer(x.isCorrect)})
    });
}

// Función para seleccionar respuesta (Guarda el resultaado y muestra la siguiente pregunta)

function selectAnswer(answ) {
    if (answ) {
        console.log('Respuesta Correcta')
        corrects ++
    }

    if (questionIndex < questions.length - 1) {
        questionIndex ++
        showQuestion()
    } else {
        showEnd()
    }
}

function showEnd() {
    question.classList.add('result-style')
    question.innerText = `Haz finalizado el test
    Tu puntuación: (${corrects}) / (${questions.length}) 
    `
    answerButtons.innerText = ""
}


// Questions --> Información que viene desde el backend para pintar las preguntas

const questions = [
    {   pregunta: "Cual es la capital de Colombia?", 
        opciones: [
            {text: "Medellín", isCorrect: false},
            {text: "Bogotá", isCorrect: true},
            {text: "Cali", isCorrect: false},
            {text: "Pereira", isCorrect: false}
        ]
    },
    {   pregunta: "En que año fue el descubrimiento de américa", 
        opciones: [
            {text: "1810", isCorrect: false},
            {text: "2005", isCorrect: false},
            {text: "1750", isCorrect: false},
            {text: "1492", isCorrect: true},
        ]
    },
    {   pregunta: "Quien ganó el mundial de Qatar 2022?", 
        opciones: [
            {text: "Argentina", isCorrect: true},
            {text: "Colombia", isCorrect: false},
            {text: "Qatar", isCorrect: false},
            {text: "Francia", isCorrect: false}
        ]
    }
]

showQuestion()