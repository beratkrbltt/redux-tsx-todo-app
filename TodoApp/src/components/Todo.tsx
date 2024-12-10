import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps;

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewtodo] = useState<string>(content);

    const dispatch = useDispatch();

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload))
        setEditable(false);
    }

    return (
        <div className='todo-container'>
            {editable ? <input type='text'
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewtodo(e.target.value)} /> : <div>{content}</div>}
            <div className='icons'>
                <IoIosRemoveCircleOutline onClick={handleRemoveTodo} style={{ marginRight: '10px' }} />
                {editable ? <FaCheck onClick={handleUpdateTodo} /> : <FaRegEdit onClick={() => setEditable(true)} />}
            </div>
        </div>
    )
}

export default Todo