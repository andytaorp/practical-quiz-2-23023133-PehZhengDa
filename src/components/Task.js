import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */
export default function Task({task, onToggleTask, onDeleteTask}) {
        return (
          <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            <input
              type="checkbox"
              checked={task.packed}
              onChange={() => onToggleTask(task.id)}
            />
            {task.description}
            <dev>
              <button onClick={() => onDeleteTask(task.id)} className="delete-button">
                ❌
              </button>
            </dev>
      
          </li>
        );
      }
