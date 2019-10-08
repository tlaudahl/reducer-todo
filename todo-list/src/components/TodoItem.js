import React from 'react'

export default function TodoItem(props) {

    return (
        <div onClick={() => props.handleClick(props.id)}>
            <h1 className={`item${props.completed ? ' done' : ''}`}>{props.item}</h1>
            <button onClick={props.handleClick}>HELLO</button>
        </div>
    )
}
