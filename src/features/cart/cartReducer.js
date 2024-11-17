const initialState = []


function cartReducer(state = initialState, action) {
    switch (action.type) {
        case "card/addItem":
            return state.map(item =>
                item._id !== action.payload._id ? item : {
                    ...item,
                    count: item.count + action.payload.count
                }
            )
        case "card/decrementItem":
            let itemToBeDecremented = state.find(item => item._id === action.payload._id);

            if (itemToBeDecremented.count === 1) {
                return state.filter(item => item._id === action.payload._id)
            } else {
                return state.map(item => item._id !== action.payload._id ? item : {
                    ...item,
                    count: item.count - 1
                })
            }
        case "card/incrementItem":
            return state.map(item => item._id !== action.payload._id ? item : {
                ...item,
                count: item.count + 1
            })
        case "card/setCount":
            return state.map(item => item._id !== action.payload._id ? item : {
                ...item,
                count: action.payload.count
            })
        case "card/deleteItem":
            return state.filter(item => item._id === action.payload._id)
        default:
            return state
    }
}

export default cartReducer