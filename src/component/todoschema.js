import * as yup from "yup";

const todoSchmea = yup.object().shape({
  title: yup
    .string()
    .required("Title cannot be empty")
    .min(5, "Title should be at least of 5 characters"),
  description: yup
    .string()
    .required("description cannot be empty")
    .min(10, "description should be minimum of 10"),
});
export default todoSchmea;
