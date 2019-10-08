import React, { useState } from 'react'

export default function Form({ dispatch }) {
    const [todo, setTodo] = useState('');


    const handleChange1 = e => {
        e.preventDefault();
        setTodo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_ITEM',
            payload: todo
        })
    }

    const handleClear = () => {
        dispatch({
            type: 'CLEAR_COMPLETED'
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Add Item</h1>
                <input type='text' name='addTodoItem' onChange={handleChange1} />
                <button type='submit'>Add!</button>
            </form>
            <button onClick={handleClear}>Clear!</button>
        </div>
    )
}
