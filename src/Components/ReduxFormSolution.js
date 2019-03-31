import React from 'react';
import { connect } from 'react-redux';
import { updateTestFormValue } from '../Redux/actions/testFormActions';

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
        const { value, updateTestFormValue } = this.props.formState;
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
            <form>
                <label htmlFor="firstName">First Name</label>
                <input 
                type="text"
                name="firstName"
                value={value}
                onChange={ (e) => {updateTestFormValue(e.target.value)} }
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

const mapStateToProps = state => ({
    formState: state.testFormReducer
});

const mapDispatchToProps = {
    updateTestFormValue
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormSolution);