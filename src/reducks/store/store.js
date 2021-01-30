import{
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose
}from 'redux';
import{UsersReducer} from '../users/reducers';
import{ProductsReducer} from '../products/reducers';
import{projectsReducer} from '../projects/reducers';
import {connectRouter,routerMiddleware} from "connected-react-router";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function createStore(history){

    return reduxCreateStore(
        combineReducers({
            router:connectRouter(history),
            users:UsersReducer,
            products:ProductsReducer,
            project:projectsReducer,
            
        }),
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            )
        )
    )
}