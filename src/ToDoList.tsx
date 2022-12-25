import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  /*   const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }; */
  /*   return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a todo" />
        <button>Add</button>
      </form>
    </div>
  ); */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data: any) => {};
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
            minLength: 10,
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message as string}</span>
        <input
          {...register("firstname", { required: "First Name is required" })}
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
      </form>
    </div>
  );
}

export default ToDoList;
