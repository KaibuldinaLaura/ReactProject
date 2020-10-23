import React, { ReactElement,useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import "../styles/ProductDetails.css"
import { cart, products} from "../databases/database"
import { Product } from '../databases/entities'
import Counter from './Counter'
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    InstapaperIcon,
    InstapaperShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    VKShareButton,

  } from "react-share";



export default function ProductDetail(): ReactElement {

    const match = useRouteMatch<{prodId: any}>()
    const productID = match.params.prodId;

    const addCart = (id: number, prd: Product) => {
        if(cart && prd){
            const checker = cart.find((c) => c.prd_id === id)
            if(checker){
                alert("The product is already in your bag!");
                return;
            }
        id = cart.length + 1;
        cart.push(prd)
        alert("You have sucessfully added the product!")
        }
    }
    
    return (
      
        <div id = "productDetails">
            { 
                products.filter(prd => prd.prd_id == productID).map(item => (
                    
                <div className = "details" key = {item.prd_id}>
                    <Zoom zoomMargin={40}>
                    <img
                        src={item.prd_img}
                        className="image"
                        style={{ width: "25em"}}
                    />
                    </Zoom>

                    <div className="box">
                        <div className="row">
                            <h3>DESIGNED IN GERMANY</h3>
                            <h2>{item.prd_name}</h2>
                            <h3>${item.prd_price}.00</h3>

                     
                        <Counter initialCount = {0} product = {item} prodId = {productID}/>
                        
                            
                        </div>
                        <Link to = {`${match.url}`}>
                        <button id = "card" onClick = {() => addCart(item.prd_id, item)}>
                            Add to shopping bag
                        </button>
                        </Link>

                        
                        
                        <p>{item.prd_description}</p>
                        <div className = "share">
                            <ul>
                                <li><FacebookShareButton url= "facebook.com"><FacebookIcon size={40}round/></FacebookShareButton></li>
                                <li><InstapaperShareButton url= "facebook.com"><InstapaperIcon size={40}round/></InstapaperShareButton></li>
                                <li><TelegramShareButton url= "facebook.com"><TelegramIcon size={40}round/></TelegramShareButton></li>
                                <li><VKShareButton url= "facebook.com"><FacebookIcon size={40}round/></VKShareButton></li>
                                <li><EmailShareButton url= "facebook.com"><EmailIcon size={40}round/></EmailShareButton></li>
                                <li><TwitterShareButton url= "facebook.com"><TwitterIcon size={40}round/></TwitterShareButton></li>
                            </ul>
                        </div>


                    </div>
                </div>
            ))}
        </div>
    
    )
}
