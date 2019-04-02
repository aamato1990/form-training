const updateTestFormValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if(/^[a-zA-Z]+$/.test(value) || value.length === 0) {
        return {
            type: 'UPDATE',
            payload: {
                name,
                value
            }
        }
    } else {
        return {
            type: 'NO_UPDATE'
        };
    }
}

const submitTestForm = (e, name) => {
    e.preventDefault();
    const message = `Hello, ${name.firstName} ${name.lastName}`;
    return {
        type: 'SUBMIT',
        payload: {
            message
        }
    }
}

export { updateTestFormValue, submitTestForm };