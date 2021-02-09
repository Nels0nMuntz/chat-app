import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dialogs from './dialogs/reducer';
import user from './user/reducer';
import messages from './messages/reducer';

const rootReducer = combineReducers({
    dialogs,
    user,
    messages,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;
export default store;