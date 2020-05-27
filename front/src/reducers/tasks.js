import {
  GET_ALL,
} from '../constants/ActionTypes'

const initialState = [
  {
    title: 'Buscar sobrinha',
    id: 0
  }
]

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return [
        ...state
      ]

    default:
      return state
  }
}
