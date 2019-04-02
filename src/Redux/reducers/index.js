import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import testFormReducer from './testFormReducer';

const rootReducer = combineReducers({
    testFormReducer,
    form: formReducer,
});

export default rootReducer;