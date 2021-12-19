import { initialState } from '../asset/data'
console.log(initialState);

const ItemReducer = (state = initialState) => {
    console.log(state);
    return state;
}

export default ItemReducer