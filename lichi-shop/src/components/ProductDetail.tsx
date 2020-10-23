import React, { ReactElement,useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import {  products } from '../databases/database'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import "../styles/ProductDetails.css"
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
    const [cart, setCart] = useState({  })

    const addCart = (id: number) => {

        const data = products.filter(prd => {
            return prd.prd_id === id
        })

        console.log("sadsa")
        setCart({...cart, ...data})

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
                            </div>

                            <button id = "card" onClick = {() => addCart(item.prd_id)}>
                                Add to shopping bag
                            </button>
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
