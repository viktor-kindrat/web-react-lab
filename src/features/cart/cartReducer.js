const initialState = []


function cartReducer(state = initialState, action) {
    switch (action.type) {
        case "cart/addItem":
            let isExist = state.find(item => item._id === action.payload._id)?._id;

            if (isExist) {
                return state.map(item =>
                    item._id !== action.payload._id ? item : {
                        ...item,
                        count: item.count + action.payload.count
                    }
                )
            } else {
                return [...state, action.payload]
            }
        case "cart/decrementItem":
            let itemToBeDecremented = state.find(item => item._id === action.payload._id);

            if (itemToBeDecremented.count === 1) {
                return state.filter(item => item._id !== action.payload._id)
            } else {
                return state.map(item => item._id !== action.payload._id ? item : {
                    ...item,
                    count: item.count - 1
                })
            }
        case "cart/incrementItem":
            return state.map(item => item._id !== action.payload._id ? item : {
                ...item,
                count: item.count + 1
            })
        case "cart/setCount":
            return state.map(item => item._id !== action.payload._id ? item : {
                ...item,
                count: action.payload.count
            })
        case "cart/deleteItem":
            return state.filter(item => item._id !== action.payload._id)
        default:
            return state
    }
}

export default cartReducer