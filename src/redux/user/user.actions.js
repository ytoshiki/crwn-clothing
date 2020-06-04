import { UserActionTypes } from "./user.types"

//Literally are just functions that return objects

//Each object is in the correct format that the action is expected to be

export const setCurrentUser = user => ({
  //This type is supposed to match the one in Reducer
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})
