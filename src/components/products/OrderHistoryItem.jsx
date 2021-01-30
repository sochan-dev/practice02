import React from 'react';
import Divider from "@material-ui/core/Divider";
import {TextDetail} from "../UIkit";
import {OrderedProducts} from "./index";

const dateTimeToString = (date) =>{
    return date.getFullYear() + '-'
    + ('00' + (date.getMonth() + 1)).slice(-2) + '-'
    + ('00' + (date.getDate() + 1)).slice(-2) + ' '
    + ('00' + (date.getHours() + 1)).slice(-2) + ':'
    + ('00' + (date.getMinutes() + 1)).slice(-2) + ':'
    + ('00' + (date.getSeconds() + 1)).slice(-2)
}
    const dateToString = (date) =>{
        return date.getFullYear() + '-'
    + ('00' + (date.getMonth() + 1)).slice(-2) + '-'
    + ('00' + (date.getDate() + 1)).slice(-2)
    }

 const OrderHistoryItem = (props) => {
     const order = props.order;
     const orderDatetime = dateTimeToString(order.updated_at.toDate());
     const shippingDate = dateToString(order.shipping_date.toDate())
     const price = "¥" + order.amount.toLocaleString();
     const products = props.order.products;
     

    return(
        <div>
            <div className="module-spacer--small" />
                <TextDetail label={"注文ID"} value={props.order.id} />
                <TextDetail label={"注文日時"} value={orderDatetime} />
                <TextDetail label={"発送予定日"} value={shippingDate} />
                <TextDetail label={"注文金額"} value={price} />
                {Object.keys(products).length > 0 && (
                    <OrderedProducts products={products} />
                )}
                <div className="module-spacer--extra-small"/>
                <Divider />
        </div>
        
    )
 }

 export default OrderHistoryItem;