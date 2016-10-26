import {ADD_DATA, DELETE_DATA} from '../constants/ActionTypes'

const initialState = [
  {
    id:0,
    name:'ARI',
    phone:'081932377341'
  }
]

export default function data(state = initialState, action){
  switch (action.type){
    case ADD_DATA:
    return [
      {
        id: state.reduce((maxId,data) => Math.max(data.id, maxId), -1)+1,
        name: action.name,
        phone: action.phone
      },
      ...state
    ]
    case DELETE_DATA:
    return state.filter(data => data.id !==action.id)
    default:
    return state
  }
}
