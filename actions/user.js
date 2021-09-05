export const updateEmail = (email) => {
    return {type: "UPDATE_EMAIL", payload:email}
}

export const updateName = (name) => {
    return {type: "UPDATE_NAME", payload:name}
}

export const updatePassword = (password) => {
    return {type: "UPDATE_PASSWORD", payload:password}
}

export const confirmPassword= (cpassword) => {
    return {type: "CONFIRM_PASSWORD", payload:cpassword}
}