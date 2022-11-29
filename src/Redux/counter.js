import { INCREMENT, DECREMENT } from './constant';

const initialState = {
    price: 0
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { price: action.payload }
        case DECREMENT:
            return { price: action.payload }
        default:
            return state;
    }
}

export default reducers;