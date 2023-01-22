import React, { useState } from "react";
import validate from "./Validate.jsx";

export { validate };

export default function Form() {
  const [input, setInput] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  function onHandleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function onHandleSubmit(e) {
    e.preventDefault();
    // console.log(e)
  }

  return (
    <form onSubmit={(e) => onHandleSubmit(e)}>
      <div>
        <label>Username:</label>
        <input
          className={errors.username && "danger"}
          name="username"
          type="text"
          onChange={onHandleInput}
          value={input.username}
        />
        {errors.username && <p className="danger">{errors.username}</p>}
      </div>
      <br />
      <div>
        <label>Password:</label>
        <input
          className={errors.password && "danger"}
          name="password"
          type="password"
          onChange={onHandleInput}
          value={input.password}
        />
        <br />
        {errors.password && <p className="danger">{errors.password}</p>}
      </div>
      <br />
      <input type="submit" />
    </form>
  );
}
