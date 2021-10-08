
const reducer = (state={}, action: { type: any; payload: any; }) => {
  switch(action.type){
    case "ADD_USER":
      console.log("aaaaaacctt",action.payload)
      return { ...state, ...action.payload } 

      case "LOGOUT":
            return {}
      
      default:
          return state;
  }

}

export default reducer
