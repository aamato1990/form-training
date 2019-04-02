import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Store from './Redux/store';
import App from "./App";
import ReactForm from "./Components/ReactForm";
import ReduxForm from "./Components/ReduxForm";
import ReactFormSolution from "./Components/solutions/ReactFormSolution";
import ReduxFormSolution from "./Components/solutions/ReduxFormSolution";

const initialState = {
    testFormReducer: {
        firstName: '',
        lastName: '',
        message: '',
    }
};

const storeInstance = Store(initialState);

const styles = {
    alignLeft: {
        textAlign: 'left',
    }
}

class AppRoot extends React.Component {
    render() {
        return (
        <Provider store={storeInstance}>
            <App>
                <Router>
                    <Container>
                        <ul style={styles.alignLeft}>
                            <li><Link to="/react-form">React Form</Link></li>
                            <li><Link to="/redux-form">Redux Form</Link></li>
                            <li><Link to="/react-form-solution">React Form Solution</Link></li>
                            <li><Link to="/redux-form-solution">Redux Form Solution</Link></li>
                        </ul>
                        <Route path="/react-form" component={ReactForm}/>
                        <Route path="/redux-form" component={ReduxForm}/>
                        <Route path="/react-form-solution" component={ReactFormSolution}/>
                        <Route path="/redux-form-solution" component={ReduxFormSolution}/>
                    </Container>
                </Router>
            </App>
        </Provider>
        );
    }
}

export default AppRoot;