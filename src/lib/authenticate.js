
export const login = (user) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    console.log(users)

    let currentUser = users.find((item) => item.email === user.email);

    if (!currentUser) {
        return "User does not exist";
    }

    if (currentUser.password === user.password) {
        return true
    } else {
        return "Incorrect password";
    }
}


export const signUp = (user) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let currentUser = users.find((item) => item.username === user.username);
    let currentUserWithEmail = users.find((item) => item.email === user.email);

    if (currentUser || currentUserWithEmail) {
        return "User already exist"
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))

    return true
}