import { combineReducers, createStore } from "redux";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_TODO":
      return [...state, action.payload];
    case "COMPLETE_TODO":
      return state.map((value, index) => {
        if (index === action.payload) {
          value.completed = !value.completed;
        }
        return value;
      });
    case "DELETE_TODO":
      return state.filter((value, index) => index !== action.payload);
    default:
      return state;
  }
};

const reducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(reducer);
export default store;
