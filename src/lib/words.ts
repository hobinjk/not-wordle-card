import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import {
  loadGameStateFromLocalStorage,
} from './localStorage'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

const happy = WORDS.indexOf('happy');
const birth = WORDS.indexOf('birth');
const month = WORDS.indexOf('month');

export const getWordOfDay = () => {
  let state = loadGameStateFromLocalStorage();
  let index = happy;
  switch (state && state.index) {
    case 1:
      index = birth;
      break;
    case 2:
      index = month;
      break;
    default:
      index = happy;
      break;
  }

  return {
    solution: WORDS[index].toUpperCase(),
    solutionIndex: index,
  }
}

export const { solution, solutionIndex } = getWordOfDay()
