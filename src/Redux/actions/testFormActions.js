const updateTestFormValue = (value) => {
    return {
        type: 'UPDATE',
        payload: value
    }
}

const updateLastNameValue = (value) => {
    return {
        type: 'UPDATE',
        payload: value
    }
}

export { updateTestFormValue };