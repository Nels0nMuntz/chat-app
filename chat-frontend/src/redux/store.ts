import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dialogs from './reducers/dialogs';
import messages from './reducers/messages';
import user from './user/reducer';

const rootReducer = combineReducers({
    dialogs,
    messages,
    user
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>
export default store;