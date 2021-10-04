import React from 'react';
import TodoListRow from './Todo-list-row/Todo-list-row';
import './Todo-list.scss';

const TodoList = ({tasks, setTasks}) => {
    return (
        <div className="todo-list">
            {tasks.length ?
                 tasks.map((task, i) => <TodoListRow key={i} task={task.task} completed={task.completed} id={task._id} setTasks={setTasks} tasks={tasks}/>)
                 : <div className="todo-list__all-set">All set :)</div>
                }
        </div>
    )
};

export default TodoList;