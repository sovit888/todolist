import React from "react";
import { Card, CardBody, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";
import { completeTodo, removeTodo } from "../store/action";

const TodoList = ({ todos, complete, deleteTodo }) => {
  const handleToggle = (index) => (event) => {
    complete(index);
  };
  const hanldeListDelete = (index) => (event) => {
    deleteTodo(index);
  };
  return (
    <>
      <div className="my-2">
        {todos.map((todo, index) => {
          return (
            <Card className="mb-2" key={index}>
              <CardBody>
                <div className={todo.completed ? "strike" : ""}>
                  <h3>{todo.title}</h3>
                  <p>{todo.description}</p>
                </div>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={handleToggle(index)}
                      checked={todo.completed}
                    />{" "}
                    Mark as Done
                  </Label>
                </FormGroup>
                <br />
                <Button
                  color="danger"
                  className="mt-2"
                  onClick={hanldeListDelete(index)}
                >
                  Delete Todo
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    complete: (id) => dispatch(completeTodo(id)),
    deleteTodo: (index) => dispatch(removeTodo(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
