import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {add} from './store'

export function TodoAdd() {

    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = () => {
        dispatch(add(task.toString()));
        setTask('')
    };

    return (
        <div>
            <input onChange={(e) => setTask(e.target.value)} value={task} type="text"/>
            <button onClick={handleAddTask}>
                Create task
            </button>
        </div>
    )
}