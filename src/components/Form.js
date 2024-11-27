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
      <h3>New Task</h3>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)} // Update state on input change
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
