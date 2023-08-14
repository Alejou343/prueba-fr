**Documentación del código**

***Index.html***
    Es un archivo que contiene la plantilla base para el esqueleto de la aplicación de Quiz App, algunos botones, párrafos y contenedores son los encargados de la estructura.

***Styes.css***
    Contiene los estilos de algunos elementos importantes, así mismo de las clases y pseudoclases de algunos elementos 

***Script.js***
    Contiene una serie de variables y funciones que le dan el adecuao comportamiento a la aplicación, entre ellas están:

        Variables del juego: 
            
            questionIndex: Recorre desde el 0 hasta el número total de preguntas en la aplicación (10) y sirve para mostrar en pantalla dicha pregunta con sus opciones de respuesta
            
            corrects: Una variable que cuenta la cantidad de respuestas correctas según la elecciones del usuario (inicia en 0 y su valor máximo son la cantidad de preguntas)
            
            participante: Se captura del valor ingresado en el input y se refiere al nombre del participante del Quiz

        Funciones del juego:
            
            startQuiz: Inicializa las variables del juego, se crean y se renderizan los inputs y botones con sus clases y eventos correspondientes asociados al botón "Comenzar" que ejecuta la función showQuestion.

            showQuestion: Valida que se haya llenado la información del input, luego según el "questionIndex" renderiza una pregunta con 4 botones asociados a las 4 posibles opciones de respuesta

            selectAnswer: Es una función que valida el resultado de la respuesta según la propiedad isCorrect del objeto JSON, aquí también se realiza el render de la siguiente pregunta y en caso de no haber más preguntas se mostrará el resultado obtenido

            showEnd: Es una función que muestra los resultados obtenidos y el ranking actual de los participantes que han realizado la actividad, esta información se presenta en una tabla ordenada según la cantidad de respuestas correctas, de igual manera encontramos el botón "Reiniciar" para volver al inicio del juego y reiniciar las variables utilizadas para jugar.

    Para utilizar esta aplicación puedes clonar este repositorio y ejecutar el archivo index.html ó visitar el siguiente enlace: [Quiz app](https://alejou343.github.io/prueba-fr/)

