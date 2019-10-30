import { ADD_TODO } from "../actions/actionTypes";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

export default todos;
