const questionContainer = document.querySelector('#quiz-container');
const message = document.querySelector('#message');
const question = document.querySelector('#question');
const answerButtons = document.querySelector('#answer-buttons');
const functionButton = document.querySelector('#function-button');
const alertText = document.querySelector('#alert-text');

let questionIndex = 0
let corrects = 0
let participante = ''
const ranking = []


// Función para login y comenzar la actividad

function startQuiz() {
    questionIndex = 0
    corrects = 0
    participante = ''

    const input = document.createElement('input')
    const button = document.createElement('button')
    button.classList.add('btn', 'btn-position')

    button.innerText = "Comenzar"
    message.innerText = "Ingresa tu nombre de usuario"

    functionButton.innerText = ""
    functionButton.append(input, button)

    button.addEventListener('click', showQuestion)
    input.addEventListener('input', function(e) {
        participante = e.target.value
    })
}


// Función para mostrar la pregunta y sus opciones de respuesta

function showQuestion() {
    if (participante) {
        message.innerText = ''
        answerButtons.innerHTML = '';
        alertText.innerText = '';
        functionButton.innerHTML = '';
        question.innerText = questions[questionIndex].pregunta
    
        questions[questionIndex].opciones.forEach(x => {
            const button = document.createElement('button')
            button.classList.add('btn')
            button.innerText = x.text
            button.addEventListener('click', () => {selectAnswer(x.isCorrect)})
            answerButtons.append(button)
        });
    } else {
        alertText.innerText = 'Debes ingresar tu nombre de usuario'
    }
}


// Función para seleccionar respuesta (Guarda el resultaado y muestra la siguiente pregunta)

function selectAnswer(answ) {
    if (answ) {
        corrects ++
    }

    if (questionIndex < questions.length - 1) {
        questionIndex ++
        showQuestion()
    } else {
        showEnd()
    }
}

// Función para mostrar los resultados del quiz

function showEnd() {
    question.innerText = ""
    answerButtons.innerText = ""
    const button2 = document.createElement('button')
    button2.classList.add('btn')
    button2.innerText = "Reiniciar"
    button2.addEventListener('click', startQuiz)
    functionButton.append(button2)

    ranking.push({nombre: participante, aciertos: corrects})
    ranking.sort((a,b) => b.aciertos - a.aciertos)

    message.innerHTML = 
    `<div>
        <h1>
            Felicidades ${participante}!
        </h1>
        <h2> 
            Tu puntuación: ${corrects} / ${questions.length} 
        </h2>
        <table class="ranking-table"> 
            <tr><th> Nombre </th><th> Aciertos </th></tr>
            ${ranking.map(part => `<tr><td> ${part.nombre} </td><td> ${part.aciertos} </td></tr>`)}
        </table>
    </div>
    `
}


// Questions --> Información que viene desde el backend para pintar las preguntas

const questions = 
    [
        {
            "pregunta": "¿Cuál es el río más largo del mundo?",
            "opciones": [
                {"text": "Nilo", "isCorrect": true},
                {"text": "Amazonas", "isCorrect": false},
                {"text": "Yangtsé", "isCorrect": false},
                {"text": "Mississippi", "isCorrect": false}
            ]
        },
        {
            "pregunta": "¿En qué año comenzó la Primera Guerra Mundial?",
            "opciones": [
                {"text": "1914", "isCorrect": true},
                {"text": "1939", "isCorrect": false},
                {"text": "1905", "isCorrect": false},
                {"text": "1918", "isCorrect": false}
            ]
        },
        {
            "pregunta": "¿Cuál es el símbolo químico del oro?",
            "opciones": [
                {"text": "Ag", "isCorrect": false},
                {"text": "Au", "isCorrect": true},
                {"text": "Fe", "isCorrect": false},
                {"text": "Hg", "isCorrect": false}
            ]
        },
        {
            "pregunta": "¿Cuál es el planeta más grande del sistema solar?",
            "opciones": [
                {"text": "Venus", "isCorrect": false},
                {"text": "Marte", "isCorrect": false},
                {"text": "Júpiter", "isCorrect": true},
                {"text": "Saturno", "isCorrect": false}
            ]
        },
        {
            "pregunta": "¿Quién escribió la obra 'Don Quijote de la Mancha'?",
            "opciones": [
                {"text": "Gabriel García Márquez", "isCorrect": false},
                {"text": "Miguel de Cervantes", "isCorrect": true},
                {"text": "Pablo Neruda", "isCorrect": false},
                {"text": "Mario Vargas Llosa", "isCorrect": false}
            ]
        },
        {
            "pregunta": "¿Cuál es el metal más abundante en la corteza terrestre?",
            "opciones": [
                {"text": "Hierro", "isCorrect": true},
                {"text": "Aluminio", "isCorrect": false},
                {"text": "Cobre", "isCorrect": false},
                {"text": "Oro", "isCorrect": false}
            ]
        },
        {
            "pregunta": "¿Cuál es el océano más grande del mundo?",
            "opciones": [
                {"text": "Atlántico", "isCorrect": false},
                {"text": "Pacífico", "isCorrect": true},
                {"text": "Índico", "isCorrect": false},
                {"text": "Ártico", "isCorrect": false}
            ]
        },
        {
            "pregunta": "¿Cuál es la montaña más alta del mundo?",
            "opciones": [
                {"text": "Monte Kilimanjaro", "isCorrect": false},
                {"text": "Monte Everest", "isCorrect": true},
                {"text": "Monte McKinley", "isCorrect": false},
                {"text": "Monte Fuji", "isCorrect": false}
            ]
        },
        {
            "pregunta": "¿En qué país se encuentra la torre de Pisa?",
            "opciones": [
                {"text": "Italia", "isCorrect": true},
                {"text": "Francia", "isCorrect": false},
                {"text": "España", "isCorrect": false},
                {"text": "Grecia", "isCorrect": false}
            ]
        },
        {
            "pregunta": "¿Cuál es el proceso natural que permite a las plantas producir su alimento?",
            "opciones": [
                {"text": "Fotosíntesis", "isCorrect": true},
                {"text": "Respiración", "isCorrect": false},
                {"text": "Digestión", "isCorrect": false},
                {"text": "Transpiración", "isCorrect": false}
            ]
        }
    ]   


startQuiz()