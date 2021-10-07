import { ADD_USER, RESET } from "../Constants/constants"


export const addElem = (data:any) => ({
  type: ADD_USER,
  payload: data
})
export const clear = () => ({
    type: RESET,
  })

