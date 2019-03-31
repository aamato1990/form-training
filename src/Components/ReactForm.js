import React from 'react';

const styles = {
    alignLeft: {
        textAlign: 'left',
    }
};

class ReactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            message: ''
        }
    }
    render() {
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
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                    type="text"
                    name="firstName"
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                    type="text"
                    name="lastName"
                    />
                    <input 
                    type="submit"
                    />
                </form>
            </div>
        );
    }
}

export default ReactForm;