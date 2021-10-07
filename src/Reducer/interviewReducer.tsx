 export const interviewReducer=(state = [], action: { type: any; payload: any; })=> {
    switch (action.type) {
      case "ADD_INTERVIEW":
        console.log("hiiiiiiiiii",action.payload)
        return [...state, action.payload];
  
      default:
        return state;
    }
  }
