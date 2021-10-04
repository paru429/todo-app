import React, {useState} from 'react';
import axios from 'axios';
import './Todo-add-item-form.scss';

const TodoAddItemForm = ({tasks, setTasks}) => {
    const [ value, setValue ] = useState('');

    const handleOnSubmit = async () => {
        const reqBody =  {
            task: value,
            completed: false
        };

        try {
            const {data} = await axios.post(
                'http://localhost:3030/todos',
                reqBody,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            )

          setTasks(tasks.concat([data]));
          setValue('');
        } catch(err) {
            console.log(err);
        };
    };

    const handleValueChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="todo-add-item-form">
            <div>
                <input id="new-item" name="item" type='text' className="todo-add-item-form__input"
                    onClick={handleValueChange} onChange={handleValueChange} onBlur={handleValueChange} value={value}/>
            </div>
            <div>
                <button type='submit' className="todo-add-item-form__submit" onClick={handleOnSubmit}>Add</button>
            </div>
        </div>
    )
}

export default TodoAddItemForm;