import React from 'react'
import TodoItem from './TodoItem';

export default function List({ state, dispatch }) {

    console.log(state.todos)

    const handleClick = id => {
        dispatch({
            type: 'SET_COMPLETED',
            payload: id
        })
    }

    return (
        <div>
            {state.todos.map(item => {
                return (
                    <>
                    <TodoItem item={item.item} id={item.id} completed={item.completed} handleClick={handleClick} />
                    </>
                )
            })}
        </div>
    )
}
