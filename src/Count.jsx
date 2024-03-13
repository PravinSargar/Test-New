import React, { useEffect, useState } from 'react'

export const Count = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState("")

    useEffect(() => {
        console.log("condition rendered successfully", count)
    }, [count])
    return (
        <div>
            <h1>Count {count} item {item}</h1>
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}
