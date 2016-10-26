import * as types from '../constants/ActionTypes'

export function addData(name, phone){
  return {types.ADD_DATA, name, phone}
}

export function deleteData(id){
  return {types.DELETE_DATA, id}
}
