export const addNewTodo = (payload) => {
  return {
    type: "ADD_NEW_TODO",
    payload: payload,
  };
};

export const completeTodo = (payload) => {
  return {
    type: "COMPLETE_TODO",
    payload: payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: "DELETE_TODO",
    payload: payload,
  };
};
