import { Action } from "../Interfaces/interface";

const reducer = (state={}, action: Action) => {
  switch(action.type){
    case "ADD_USER":
      console.log(action.payload)
      return { ...state, ...action.payload }

      
      default:
          return state;
  }

}

export default reducer
