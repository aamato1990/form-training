import React from 'react';
import { Field, reduxForm } from 'redux-form';

const styles = {
    alignLeft: {
        textAlign: 'left',
    }
};

class ReduxFormForm extends React.Component {
    render() {
        return (
        <div style={styles.alignLeft}>
            <h2>
                Challenge:
            </h2>
            <ol>
                <li>
                Use redux-form to hook this form up to the "form" reducer alrady in place.<br/>
                (*Hint: <a title="Redux-form Docs" href="https://redux-form.com/8.1.0/docs/gettingstarted.md/">Redux-form Getting Started</a>)
                </li>
                <li>On submit, display a message saying "Hello, [firstName] [lastName]"</li>
                <li>What is the <code>reduxForm()</code> function doing?</li>
                <li>What is <code>Field</code>?</li>
            </ol>
            <form>
                <label htmlFor="firstName">First Name</label>
                <Field 
                type="text"
                component="input"
                name="firstName"
                />
                <label htmlFor="lastName">Last Name</label>
                <Field 
                type="text"
                component="input"
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


export default reduxForm({
    form: 'reduxFormForm'
})(ReduxFormForm);