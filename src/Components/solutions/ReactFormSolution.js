import React from 'react';

const styles = {
    alignLeft: {
        textAlign: 'left',
    }
};

class ReactFormSolution extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            message: ''
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(/^[a-zA-Z]+$/.test(value) || value.length === 0) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    [name]: value,
                };
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const message = `Hello, ${this.state.firstName} ${this.state.lastName}`;
        this.setState((prevState) => {
            return {
                ...prevState,
                message
            }
        });
    }

    render() {
        const { firstName, lastName, message } = this.state;
        return (
            <div style={styles.alignLeft}>
                <h2>
                    Challenge:
                </h2>
                <ol>
                    <li>Make this a React-controlled form.</li>
                    <li>Do not allow numeric values in the input fields</li>
                    <li>On submit, display a message saying "Hello, [firstName] [lastName]"</li>
                    <li>Are the 'input' components in this file DOM elements? Do they come from another package?</li>
                </ol>
                <form
                onSubmit={this.handleSubmit}
                >
                    <label htmlFor="firstName">First Name</label>
                    <input 
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="submit"
                    />
                </form>
                { message.length > 0 ?
                (<div>
                    {message}
                </div>) : ''
                }
            </div>
        );
    }
}

export default ReactFormSolution;