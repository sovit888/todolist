import React from "react";
import {
  Form,
  Label,
  Input,
  FormGroup,
  Button,
  FormFeedback,
} from "reactstrap";
import { useFormik } from "formik";
import todoSchmea from "./todoschema";
import { connect } from "react-redux";
import { addNewTodo } from "../store/action";

const TodoForm = ({ addTodo }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: todoSchmea,
    onSubmit: (value, { resetForm }) => {
      addTodo({ ...value, completed: false });
      resetForm();
    },
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <h2>Create a New Todo</h2>
        <TodoInputField formik={formik} name="title" label={"Title"} />
        <TodoInputField
          formik={formik}
          name={"description"}
          label={"Description"}
        />
        <Button type="submit" color="primary">
          Create Todo
        </Button>
      </Form>
    </>
  );
};

const TodoInputField = ({ name, formik, label }) => {
  return (
    <FormGroup className="mb-2">
      <Label for="title">{label}</Label>
      <Input
        type="text"
        name={name}
        id={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className="mt-1"
        invalid={formik.touched[name] && formik.errors[name] ? true : false}
      />
      <FormFeedback>
        {formik.touched[name] && formik.errors[name] ? formik.errors[name] : ""}
      </FormFeedback>
    </FormGroup>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addNewTodo(todo)),
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
