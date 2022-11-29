import {question} from './preguntas.js'
import {data} from './datos.js'

export const question = data.map(question => new question(question.question,question.choices,question.answer))