const message = document.querySelector('#message');
const question = document.querySelector('#question');
const alertText = document.querySelector('#alert-text');
const answerButtons = document.querySelector('#answer-buttons');
const functionButton = document.querySelector('#function-button');
const questionContainer = document.querySelector('#quiz-container');

let questionIndex = 0
let corrects = 0
let participante = ''
const ranking = []
const preguntas = ['hello', 'generalCulture', 'mathQuestions']
const API = `https://backend-futuros-residentes.vercel.app/api/${preguntas[Math.floor(Math.random() * 3)]}`

async function fetchQuestions(url) {
    try {
        const response = await fetch(url, {method: 'GET', credentials: 'include'})
        const data = await response.json()
        return data
    } catch(err) {
        console.log(err)
    }
}

function startQuiz() {
    questionIndex = 0
    corrects = 0
    participante = ''

    const input = document.createElement('input')
    const button = document.createElement('button')
    input.classList.add('start-input')
    button.classList.add('start-button')

    button.innerText = "Comenzar"
    message.innerText = "Ingresa tu nombre de usuario"

    functionButton.innerText = ""
    functionButton.append(input, button)

    button.addEventListener('click', showQuestion)
    input.addEventListener('input', function(e) {
        participante = e.target.value
    })
}

async function showQuestion() {

    const questions = await fetchQuestions(API)

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

async function selectAnswer(answ) {

    const questions = await fetchQuestions(API)

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

async function showEnd() {

    const questions = await fetchQuestions(API)

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
        <h1 class="format"> 
            Tu puntuación: ${corrects} / ${questions.length} 
        </h1>
        <p class="rank"> Ranking </p>
        <table class="ranking-table"> 
            <tr class="table-header"><th class="entry"> Nombre </th><th class="entry"> Aciertos </th> <th class="entry"> Top </th></tr>
            ${ranking.map((part, i) => `<tr><td class="entry"> ${part.nombre} </td><td class="entry"> ${part.aciertos} </td> <td> ${i + 1} </td></tr>`)}
        </table>
    </div>`
}

startQuiz()