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
  const { register, watch } = useForm();
  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Email" />
        <input {...register("firstname")} placeholder="First Name" />
        <input {...register("lastname")} placeholder="Last Name" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
