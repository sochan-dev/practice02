import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listenAuthState } from './reducks/users/operations';
import {getIsSignedIn} from "./reducks/users/selectors";

const Auth = ({children}) => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const isSignedIn = getIsSignedIn(selector);

    useEffect(() =>{
        console.log('effect');
        if(!isSignedIn){
            dispatch(listenAuthState())
        }
    },[])

    if(!isSignedIn){
        console.log('aa');
        return <></>
    }else{
        console.log('aa');
        return children
    }

}

export default Auth;