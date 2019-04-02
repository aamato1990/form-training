import React from 'react';
import { connect } from 'react-redux';
import { updateTestFormValue, submitTestForm } from '../../Redux/actions/testFormActions';

const styles = {
    alignLeft: {
        textAlign: 'left',
    }
};

class ReduxFormSolution extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { formState: { firstName, lastName, message }, updateTestFormValue, submitTestForm } = this.props;
        return (
        <div style={styles.alignLeft}>
            <h2>
                Challenge:
            </h2>
            <ol>
                <li>
                Connect this form to its reducer in the store and use redux to control it. Use the action already in your redux folder.<br/>
                (*Hint: 
                <a title="Redux Docs" href="https://react-redux.js.org/using-react-redux/connect-mapstate">Redux Docs MSTP</a>, 
                <a title="Redux Docs" href="https://react-redux.js.org/using-react-redux/connect-mapdispatch">Redux Docs MDTP</a>)
                </li>
                <li>Edit the redux action to not allow numeric values in the input fields</li>
                <li>On submit, display a message saying "Hello, [firstName] [lastName]"</li>
                <li>What is the <code>connect()</code> function doing? What does a reducer do? An Action?</li>
                <li>What did I not do properly on this reducer?</li>
            </ol>
            <form
            onSubmit={(e) => {submitTestForm(e, {firstName, lastName})}}
            >
                <label htmlFor="firstName">First Name</label>
                <input 
                type="text"
                name="firstName"
                value={firstName}
                onChange={ (e) => {updateTestFormValue(e)} }
                />
                <label htmlFor="lastName">Last Name</label>
                <input 
                type="text"
                name="lastName"
                value={lastName}
                onChange={ (e) => {updateTestFormValue(e)} }
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

const mapStateToProps = state => ({
    formState: state.testFormReducer
});

const mapDispatchToProps = {
    updateTestFormValue,
    submitTestForm
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormSolution);