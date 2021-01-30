import React from 'react'
import {getUserId, getUserName} from "../reducks/users/selectors"
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {push} from "connected-react-router";
import { signOut } from '../reducks/users/operations';

const Home = () => {
    const selector = useSelector(state => state);
    const uid = getUserId(selector);
    const uname = getUserName(selector);
    const dispatch = useDispatch();


    return(
        <div>
            <h2>Home</h2>
            <p>ユーザーID：{uid}</p>
            <p>ユーザー名：{uname}</p>
            <button onClick={() => dispatch(push('/signin'))}>
            ログイン画面へ
            </button>
            <button onClick={() => dispatch(signOut())}>サインアウト</button>
        </div>
    )
}

export default Home