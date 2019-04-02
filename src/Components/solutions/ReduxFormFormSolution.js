import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

const styles = {
    alignLeft: {
        textAlign: 'left',
    }
};
const lettersOnly = (value, prevValue) => ((/^[a-zA-Z]+$/.test(value) || value.length === 0) ? value : prevValue);

class ReduxFormFormSolution extends React.Component {
    render() {
        console.log(this.props);
        const { handleSubmit, submitSucceeded, firstName, lastName } = this.props;
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
            <form
            onSubmit={handleSubmit}
            >
                <label htmlFor="firstName">First Name</label>
                <Field 
                type="text"
                component="input"
                name="firstName"
                normalize={lettersOnly}
                />
                <label htmlFor="lastName">Last Name</label>
                <Field 
                type="text"
                component="input"
                name="lastName"
                normalize={lettersOnly}
                />
                <input 
                type="submit"
                />
            </form>
            { submitSucceeded ?
                (<div>
                    {`Hello, ${firstName || ''} ${lastName || ''}`}
                </div>) : ''
            }
        </div>
        );
    }
}

const form = reduxForm({
    form: 'reduxFormFormSolution',
    onSubmit: values =>
    console.log(`Hello, ${values.firstName || ''} ${values.lastName || ''}`)
})(ReduxFormFormSolution);

const selector = formValueSelector('reduxFormFormSolution')

export default connect(
    (state) => ({
        firstName: selector(state, 'firstName'),
        lastName: selector(state, 'lastName'),
    })
)(form);