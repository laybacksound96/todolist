import React, { useState } from "react";
import { useForm } from "react-hook-form";
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
}
function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const onVaild = (data: IForm) => {
    console.log(data);
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onVaild)}>
        <input
          {...register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors.email?.message}</span>
        <input
          {...register("firstName", {
            required: "write here",
            validate: (value) => (value.includes("nico") ? "No nico" : true),
          })}
          placeholder="First Name"
        />
        <span>{errors.firstName?.message}</span>
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password1")} placeholder="Password1" />
        <span>{errors.password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
