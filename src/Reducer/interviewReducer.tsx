export const interviewReducer = (
  state = [],
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "ADD_INTERVIEW":
      console.log("hiiiiiiiiii", action.payload);
      return [...state, action.payload];

    case "EDIT":
      const { edit, editIndex } = action.payload;
      return [
        ...state.slice(0, editIndex),
        { ...state, ...edit },
        ...state.slice(editIndex + 1),
      ];

    case "DELETE":
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];

    default:
      return state;
  }
};
