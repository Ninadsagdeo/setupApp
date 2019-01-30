import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './combineReducers';
import {composeWithDevTools} from 'remote-redux-devtools';
import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

const middlewares =[];
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state=>state.nav
);

middlewares.push(middleware);

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares,thunk))
);

export {store};