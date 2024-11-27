import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
    };
    onAddTask(newTask);
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>What are the tasks?</h3>
      <input
        type="text"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Update state on input change
        required
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
