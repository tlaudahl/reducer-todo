export const initialState = {
    todos: [
        {
            item: 'Reducer',
            id: Date.now(),
            completed: false
        }
    ]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newTodo = {
                item: action.payload,
                id: Math.floor(Math.random() * 1000000000000),
                completed: false
            }
            return {
                todos: [...state.todos, newTodo]
            }
        case 'SET_COMPLETED':
            const newItem = state.todos.map(item => {
                if (item.id.toString() === action.payload.toString()) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item
                }
            })
            return {
                todos: [...newItem]
            }
        case 'CLEAR_COMPLETED':
            const clearedItems = state.todos.filter(item => !item.completed)
            return {
                todos: [...clearedItems]
            }
        default:
            return state;
    }
}