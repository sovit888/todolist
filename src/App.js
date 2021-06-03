import React from "react";
import { Container } from "reactstrap";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import "./App.css";

const App = () => {
  return (
    <>
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </>
  );
};

export default App;
