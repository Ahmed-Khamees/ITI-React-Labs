import React, { useState } from 'react'

export const Counter = () => {
    let [count, setCount] = useState(10);

    const decreaseBtnClicked = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    const increaseBtnClicked = () => {
        setCount(count + 1);
    }

    return (
        <div className='container mx-auto d-flex justify-content-center py-5 gap-4'>
            <button onClick={decreaseBtnClicked} className='btn btn-dark'>-</button>
            <h1>{count}</h1>
            <button onClick={increaseBtnClicked} className='btn btn-dark'>+</button>
        </div>
    )
}
