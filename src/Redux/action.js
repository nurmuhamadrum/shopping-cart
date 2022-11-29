import { INCREMENT, DECREMENT } from './constant';

export const increment = (data) => ({
    type: INCREMENT,
    payload: data
})

export const decrement = (data) => ({
    type: DECREMENT,
    payload: data
})