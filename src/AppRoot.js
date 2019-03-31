import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Store from './Redux/store';
import App from "./App";
import ReactForm from "./Components/ReactForm";
import ReduxForm from "./Components/ReduxForm";
import ReduxFormSolution from "./Components/ReduxFormSolution";

const initialState = {
    testFormReducer: {
        value: ''
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
                <Container>
                    <Router>
                        <ul style={styles.alignLeft}>
                            <li><Link to="/react-form">React Form</Link></li>
                            <li><Link to="/redux-form">Redux Form</Link></li>
                            <li><Link to="/redux-form-solution">Redux Form Solution</Link></li>
                        </ul>
                        <Route path="/react-form" component={ReactForm}/>
                        <Route path="/redux-form" component={ReduxForm}/>
                        <Route path="/redux-form-solution" component={ReduxFormSolution}/>
                    </Router>
                </Container>
            </App>
        </Provider>
        );
    }
}

export default AppRoot;