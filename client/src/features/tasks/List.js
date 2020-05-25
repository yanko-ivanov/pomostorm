import React  from 'react';
import {tasks, tasksCount} from './store'
import { useSelector } from 'react-redux';

function Task(task) {
    return <li key={task}>{task}</li>
}

export function TodoList() {
    const tasksList = useSelector(tasks)
    const tasksCounter = useSelector(tasksCount)
    return <div>
        {tasksCounter > 0
            ? <span>You have {tasksCounter} tasks to do.</span>
            : <span> Task inbox zero achieved.</span>
        }
        <ul>
            {tasksList.map(task => Task(task))}
        </ul>
    </div>
}