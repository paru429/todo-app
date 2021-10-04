import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TodoAddItemForm from './Todo-add-item-form/Todo-add-item-form';
import TodoList from './Todo-list/Todo-list';
import './Todo.scss';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get(
                    'http://localhost:3030/todos',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );

                setTasks([...data]);
                console.log(tasks)
            } catch(err) {
                console.log(err)
            }   
        })()
    }, []);

    return (
        <div className="todo">
            <header className="todo__header">
                <h1>Make a todo now!!!</h1>
            </header>
            <TodoAddItemForm tasks={tasks} setTasks={setTasks}/>
            <TodoList tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}

export default Todo;