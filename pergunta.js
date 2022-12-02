import {question} from './preguntas.js'
import {data} from './datos.js'

export const questions = data.map(question => new Question(question.pregunta,question.choices,question.answer))
