export const addUser = (data) => {
    return {
        type: 'ADD',
        payload: data
    }
}

export const deleteUser = (name) => {
    return {
        type: 'DELETE',
        id: name
    }
}