
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { favoritesReducer } from '../reducers/ascFavoritesReducer';
import { asociationsRegionReducer } from '../reducers/asocitionsFromRegionReducer';
import { associationSearchReducer } from '../reducers/associationSearchReducer';

import { userLogedReducer } from "../reducers/authReducer"
import { groupsReducer } from '../reducers/groupsEventReducer';
import { groupVisitReducer } from '../reducers/groupVisit';
import { myEventsReducer } from '../reducers/myEventsReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = 
    ( typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;
    const reducers = combineReducers({
        uiReducer,
        userLogedReducer,
        asociationsRegionReducer,
        myEventsReducer,
        groupsReducer,
        favoritesReducer,
        groupVisitReducer,
        associationSearchReducer,
    });
export const store = createStore( 
        reducers,
        composeEnhancers(
            applyMiddleware( thunk )
        )
    );