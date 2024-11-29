export let initialState = {
    isAuthenticated: false,
    data: null
}

function authReducer(state = initialState, action) {
    let upd = {};
    switch (action.type) {
        case "auth/record":
            upd = {...state, data: {...state.data, ...action.payload}}
            localStorage.setItem("auth", JSON.stringify(upd))
            return upd;
        case "auth/login":
            upd = {...state, isAuthenticated: true}
            localStorage.setItem("auth", JSON.stringify(upd))
            return upd;
        case "auth/logout":
            upd = {...state, isAuthenticated: false, data: null}
            localStorage.setItem("auth", JSON.stringify(upd))
            localStorage.removeItem("cart")
            return upd;
        default:
            return state
    }
}

export default authReducer