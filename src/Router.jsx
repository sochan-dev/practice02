import React from 'react';
import {Route,Switch} from "react-router";
import {ProductDetail,ProductList,SignUp,SignIn,Reset,ProductEdit, CartList, OrderConfirm, OrderHistory,RegistProject,CreatePuzzle} from "./templates/index";
import SampleParent from "./TEST/SampleParent"
import Auth from "./Auth";


const Router = () => {
    return(
        <Switch>
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/Signin"} component={SignIn} />
            <Route exact path={"/Signin/reset"} component={Reset} />
            <Route exact path={"/sample"} component={RegistProject} />
            <Route exact path={"/sample/create"} component={CreatePuzzle} />
            <Route exact path={"/sample/teratail"} component={SampleParent} />
            <Auth>
                <Route exact path={"(/)?"} component={ProductList} />
                <Route exact path={"/product/:id?"} component={ProductDetail} />
                <Route path={"/product/edit(/:id)?"} component={ProductEdit} />
                <Route exact path={"/cart"} component={CartList} />
                <Route exact path={"/order/confirm"} component={OrderConfirm} />
                <Route exact path={"/order/history"} component={OrderHistory} />
            </Auth>
        </Switch>
    )
}

export default Router;