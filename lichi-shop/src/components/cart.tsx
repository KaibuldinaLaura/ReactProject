import React, { ReactElement, useContext, useState } from 'react'
import {cart} from "../databases/database"
import 'react-medium-image-zoom/dist/styles.css'
import "../styles/Cart.css"
import { Product } from '../databases/entities';
import { Link } from 'react-router-dom';

export default function Cart(): ReactElement {

    const removeCart = (id: number, prd: Product) =>{
        if(cart && prd){
            const checker = cart.find((c) => c.prd_id === id)
            if(checker){
                var index = cart.indexOf(prd)
                cart.splice(index, 1)
                   
            } 
        console.log(cart)
    }
}
    
    const rendering = (
        <div id = "productDetailsCart">
            {
                cart.map(item => (
                <div className = "detailsCart" key = {item.prd_id}>
                   
                    <img
                        src={item.prd_img}
                        className="imageCart"
                        style={{ width: "20em"}}
                    />
                   
                   

                    <div className="boxCart">
                        <div className="rowCart">
                            <h3>DESIGNED IN GERMANY</h3>
                            <h2>{item.prd_name}</h2>
                            <h3>Price: {item.prd_price} * {item.count} = ${item.prd_price*item.count}.00</h3>
                            <h3>Amount: {item.count}</h3>
                            
                            
                        </div>
                        <Link to = {"/card"}>
                            <button id = "cardCart" onClick = {() => removeCart(item.prd_id, item)}>
                                Remove from the cart
                            </button>
                        </Link>
                        <p>{item.prd_description}</p>
                    </div>
                </div>
            ))}
        </div>
    
    )

    return (
        <div>
            {rendering}
        </div>
    )
}
