import {signInAction,signOutAction,fetchProductsInCartAction,fetchOrdersHistoryAction} from "./actions";
import {push} from "connected-react-router";
import {auth, FirebaseTimestamp,db} from "../../firebase/index";

export const addProductToCart = (addedProduct) => {
    return async (dispatch,getState) => {
        const uid = getState().users.uid;
        const cartRef = db.collection('users').doc(uid).collection('cart').doc();
        addedProduct['cartId'] = cartRef.id;
        await cartRef.set(addedProduct)
        dispatch(push('/'));
    }
}

export const fetchOrdersHistory = () =>{
    return async(dispatch,getState) => {
        const uid = getState().users.uid;
        const list = [];

        db.collection('users').doc(uid).collection('orders').orderBy('updated_at','desc').get().then((snapshots) => {
            snapshots.forEach(snapshot => {
                const data = snapshot.data()
                list.push(data)
            })
            dispatch(fetchOrdersHistoryAction(list));
        })

    }
}

export const fetchProductsInCart = (products) => {
    return async (dispatch) => {
        dispatch(fetchProductsInCartAction(products));
    }
}

export const listenAuthState = () => {
    return (dispatch) => {
        return auth.onAuthStateChanged(user => {
            if(user){
                const uid = user.uid

                db.collection('users').doc(uid).get()
                .then(snapshot => {
                    
                    const data = snapshot.data()
                    console.log(data);
                    dispatch(signInAction({
                        isSignIn:true,
                        role:data.role,
                        uid:uid,
                        username:data.username
                    }))

                })
            }else{
                dispatch(push('/signin'))
            }
        })
    }
}

export const resetPassword = (email) => {
    return (dispatch) => {
        if(email === ""){
            alert('必須項目が未入力です');
            return false;
        }else {
            auth.sendPasswordResetEmail(email)
            .then(() => {
                alert('入力されたアドレスにパスワードリセット用のメールをお送りました');
                dispatch(push('/signin'));
            }).catch(() => {
                alert('パスワードリセットに失敗しました。通信環境の良いところで再度実行してください');
            })
        }



    }
}

export const signIn = (email,password) => {
    return async (dispatch) => {
        //validation
        if(email === "" || password === ""){
            alert("必須項目が未入力です")
            return false;
        }
        
        auth.signInWithEmailAndPassword(email,password)
        .then(result => {
            console.log(result);
            const user = result.user

            if(user){
                const uid = user.uid

                db.collection('users').doc(uid).get()
                .then(snapshot => {
                    
                    const data = snapshot.data()
                    console.log(data);
                    dispatch(signInAction({
                        isSignIn:true,
                        role:data.role,
                        uid:uid,
                        username:data.username
                    }))

                    dispatch(push('/'))
                })
                
            }
        })

    }
}

export const signUp = (username,email,password,confirmPassword) => {
    return (dispatch) => {
        console.log('通過');
        //validation
        if(username === "" || email === "" || password === "" || confirmPassword === ""){
            alert("必須項目が未入力です")
            return false;
        }
        if(password !== confirmPassword){
            alert("パスワードが一致しません。もう一度入力してください")
            return false;
        }

        return auth.createUserWithEmailAndPassword(email,password).then(result => {
            const user = result.user;
            console.log(user);
            if(user){
                const uid = user.uid;
                console.log(uid);
                const timestamp = FirebaseTimestamp.now();

                const userInitialData = {
                    created_at:timestamp,
                    email:email,
                    role:"customer",
                    uid:uid,
                    updated_at:timestamp,
                    username:username
                }

                db.collection("users").doc(uid).set(userInitialData).then(() => {
                    dispatch(push('/'))
                })

            }
        })
    }
}

export const signOut = () =>{
    return (dispatch) => {
        auth.signOut()
        .then(() => {
            dispatch(signOutAction());
            dispatch(push('/signin'));
        })
    }
}