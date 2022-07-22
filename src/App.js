import React from "react";
import "./App.css";
import { BoxDiv, Form, ButtonSignup } from "./styleSinup";
import {
  FormControl,
  Input,
  InputLabel,
  Typography,
  Alert,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function App() {
  const registerValidationSchema = yup
    .object()
    .shape({
      firstName: yup.string().required("The field is required"),
      lastName: yup.string().required("The field is required"),
      userName: yup.string().required("The field is required"),
      email: yup
        .string()
        .email("this field must be an email")
        .required("The field is required")
        .trim(),
      password: yup
        .string()
        .min(8, "must be more than 8 characters")
        .required("The field is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "The field must match")
        .required("The field is required"),
    })
    .required();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log("done");
  };
  return (
    <div className="App">
      <BoxDiv sx={{ margin: "auto" }}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="h3"
        >
          Signup
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormControl variant="standard">
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.name || ""}
                  type="text"
                  id={"firstName"}
                  {...field}
                />
              )}
            />
          </FormControl>
          {errors.firstName && (
            <Alert severity="error">{errors.firstName.message}</Alert>
          )}

          <FormControl variant="standard">
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.name || ""}
                  type="text"
                  id={"lastName"}
                  {...field}
                />
              )}
            />
          </FormControl>
          {errors.lastName && (
            <Alert severity="error">{errors.lastName.message}</Alert>
          )}
          <FormControl variant="standard">
            <InputLabel htmlFor="userName">Username</InputLabel>
            <Controller
              name="userName"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.name || ""}
                  type="text"
                  id={"userName"}
                  {...field}
                />
              )}
            />
          </FormControl>
          {errors.userName && (
            <Alert severity="error">{errors.userName.message}</Alert>
          )}
          <FormControl variant="standard">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.email || ""}
                  id={"email"}
                  type="email"
                  {...field}
                />
              )}
            />
          </FormControl>
          {errors.email && (
            <Alert severity="error">{errors.email.message}</Alert>
          )}
          <FormControl variant="standard">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.password || ""}
                  type="password"
                  id={"password"}
                  {...field}
                />
              )}
            />
          </FormControl>
          {errors.password && (
            <Alert severity="error">{errors.password.message}</Alert>
          )}
          <FormControl variant="standard">
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Input
                  value={field.confirmPassword || ""}
                  type="password"
                  id={"confirmPassword"}
                  {...field}
                />
              )}
            />
          </FormControl>
          {errors.confirmPassword && (
            <Alert severity="error">{errors.confirmPassword.message}</Alert>
          )}
          <ButtonSignup type="submit">Submit</ButtonSignup>
        </Form>
      </BoxDiv>
    </div>
  );
}

export default App;
