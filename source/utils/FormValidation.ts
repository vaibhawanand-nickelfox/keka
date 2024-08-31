import * as yup from "yup";

export const FormValidation = {
  loginForm: yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .test("emailFormat", "Invalid email", (value) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          value || ""
        );
      }),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .matches(/^\S*$/, "Password cannot contain whitespace")
      .max(32, "Maximum password length is 32 characters")
      .matches(/([a-z])/, "Password must contain a lowercase")
      .matches(/([A-Z])/, "Password must contain a Uppercase")
      .matches(/(\d+)/, "Password must contain a number")
      .matches(/[^\w]/, "Password must contain a special case character"),
  }),
  forgotPasswordForm: yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required")
      .test("emailFormat", "Invalid email", (value) => {
        return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$/.test(
          value || ""
        );
      }),
  }),
  signupForm: yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required")
      .test("emailFormat", "Invalid email", (value) => {
        return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$/.test(
          value || ""
        );
      }),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .matches(/^\S*$/, "Password cannot contain whitespace")
      .max(32, "Maximum password length is 32 characters")
      .matches(/([a-z])/, "Password must contain a lowercase")
      .matches(/([A-Z])/, "Password must contain a Uppercase")
      .matches(/(\d+)/, "Password must contain a number")
      .matches(/[^\w]/, "Password must contain a special case character"),
    rpassword: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .matches(/^\S*$/, "Password cannot contain whitespace")
      .max(32, "Maximum password length is 32 characters")
      .matches(/([a-z])/, "Password must contain a lowercase")
      .matches(/([A-Z])/, "Password must contain a Uppercase")
      .matches(/(\d+)/, "Password must contain a number")
      .matches(/[^\w]/, "Password must contain a special case character")
      .equals([yup.ref("password")], "Passwords do not match"),
  }),
};
