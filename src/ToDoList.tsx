import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  pw: string;
  pw1: string;
  extraError?: string;
}
function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.pw !== data.pw1) {
      setError(
        "pw1",
        { message: "Passwords do not match" },
        { shouldFocus: true }
      );
    }
    //setError("extraError", { message: "Server is offline" });
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com email is allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message as string}</span>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: { value: 10, message: "Username is too short" },
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message as string}</span>
        <input
          {...register("firstname", {
            required: "First Name is required",
            validate: (value) =>
              value.includes("nico") ? "nico is not allowed" : true,
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstname?.message as string}</span>
        <input
          {...register("lastname", { required: "Last Name is required" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastname?.message as string}</span>
        <input
          {...register("pw", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.pw?.message as string}</span>
        <input
          {...register("pw1", {
            required: "Password Confirmation is required",
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Confirm Password"
        />
        <span>{errors?.pw1?.message as string}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message as string}</span>
      </form>
    </div>
  );
}

export default ToDoList;
