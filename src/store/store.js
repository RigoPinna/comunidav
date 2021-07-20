
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { asociationsRegionReducer } from '../reducers/asocitionsFromRegionReducer';

import { userLogedReducer } from "../reducers/authReducer"
import { myEventsReducer } from '../reducers/myEventsReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    uiReducer,
    userLogedReducer,
    asociationsRegionReducer,
    myEventsReducer
    
});

export const store = createStore( 
        reducers,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );