const updateTestFormValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    return {
        type: 'UPDATE',
        payload: {
            name,
            value
        }
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