import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/counterSlice'

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const decreaseBtnClicked = () => {
        dispatch(decrement());
    }

    const increaseBtnClicked = () => {
        dispatch(increment());
    }

    return (
        <div className='container mx-auto d-flex justify-content-center py-5 gap-4'>
            <button onClick={decreaseBtnClicked} className='btn btn-dark'>-</button>
            <h1>{count}</h1>
            <button onClick={increaseBtnClicked} className='btn btn-dark'>+</button>
        </div>
    )
}
