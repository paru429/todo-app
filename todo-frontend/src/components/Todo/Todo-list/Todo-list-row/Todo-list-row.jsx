import React, {useState} from 'react';
import axios from 'axios';
import DeleteIcon from '../../../../Images/delete.svg';
import './Todo-list-row.scss';

const TodoListRow = ({task, id, completed, tasks, setTasks}) => {
    const [checked, setChecked] = useState(completed);

    const handleOnClick = async () => {
        try {
            await axios.put(
                `http://localhost:3030/todos/${id}`,
                {
                    task,
                    completed: !checked
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )

            setChecked(!checked);
            
            const newTasks = [...tasks];

            newTasks.map(task => {
                if(task.id === id)
                    task.completed = !checked
            });

            setTasks(newTasks);
        } catch(err) {
            console.log(err);
        }
    };

    const handleOnDelete = async () => {
        try {
            await axios.delete(
                `http://localhost:3030/todos/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )

            setTasks([...tasks.filter(task => task._id !== id)]);
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div className="todo-list-row">
            <div className={`todo-list-row__item ${checked ? 'todo-list-row__item--invalid' : ''}`}>
              <input type="checkbox" id={`item-${id}`} name={`list-item-${id}`} 
                    checked={checked} onChange={handleOnClick}/>
              <label htmlFor={`item-${id}`}>{task}</label>
            </div>
            <div onClick={handleOnDelete}>
                <img src={DeleteIcon} alt="delete"/>
            </div>
        </div>
    )
}

export default TodoListRow;