import React from 'react'
import type {RootState} from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import {AppDispatch} from "../store";

const  Counter = ({name}: { name?: string }) =>  {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div data-testid="child">
            <button
                aria-label="Increment value"
                data-testid="increment"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span data-testid="counter">{count}</span>
            <button
                data-testid="decrement"
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
            <div data-testid="name"
            >
                {name}
            </div>
        </div>
    )
}

export default Counter