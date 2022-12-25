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
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {};
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="Username"
        />
        <input
          {...register("firstname", { required: "First Name is required" })}
          placeholder="First Name"
        />
        <input
          {...register("lastname", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("pw", {
            required: true,
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Password"
        />
        <input
          {...register("pw1", {
            required: true,
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Confirm Password"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
