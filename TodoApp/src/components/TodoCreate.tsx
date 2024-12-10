import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';

function TodoCreate() {
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Oops! Your task is missing.")
            return;
        }

        const payload = {
            id: Math.floor(Math.random() * 99999999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        setNewTodo('');
    }
    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                type="text" className='todo-input' placeholder='What’s your next task?' />
            <button onClick={handleCreateTodo} className='create-buton'>Add Todo</button>
        </div>
    )
}

export default TodoCreate