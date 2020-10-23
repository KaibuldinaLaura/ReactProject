import React, { Component } from 'react';
import { Link,  useRouteMatch } from 'react-router-dom'
import { products } from '../databases/database'
import { ReactElement } from 'react'
import "../styles/Products.css"
import HoverImage from 'react-hover-image'

export default function NewClothes(): ReactElement {

    return (
        <div id = "product">
            {products.filter(item => item.prd_id >= products.length - 10).map(item =>(
                <div className="card" key = {item.prd_id}>
                    <Link to = {`${'categories'}/${item.category}/${'products'}/${item.prd_id}`} >
                        <HoverImage className = "prdImages" src ={item.prd_img} hoverSrc ={item.prd_img2}></HoverImage>
                    </Link>

                    <div className="content">
                        <h3>{item.prd_name}</h3>
                        <span className = "price">${item.prd_price}.00</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
