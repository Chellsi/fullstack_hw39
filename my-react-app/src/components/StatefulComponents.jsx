import React, { useState } from 'react'

export const CounterStateful = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount (count + 1)
    }

    return (
        <div>
            <p>Лічильник: {count}</p>
            <button onClick={increment}>Збільшити</button>
        </div>
    )
}