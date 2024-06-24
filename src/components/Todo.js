import React from 'react'


export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <button className="todo-btn" onClick={() => editTodo(task.id)} >edit</button>
                <button className="todo-btn" onClick={() => deleteTodo(task.id)} > delete</button>
            </div>
        </div>
    )
}   