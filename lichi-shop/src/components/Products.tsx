import  React from 'react'
import { Link,  useRouteMatch } from 'react-router-dom'
import { products } from '../databases/database'
import { ReactElement } from 'react'
import "../styles/Products.css"
import HoverImage from 'react-hover-image'
import Back from "../svg/backspace-solid.svg"

export default function Products(): ReactElement {

    const match = useRouteMatch<{id: any}>()
    const category = match.params.id;
    
    
    return (
        <div id = "product">
            
            <img src={Back} className = "svg" alt="" width = "40" onClick={(e) => {e.preventDefault();window.location.href='/categories';}}/>
            <p>Products</p>
            {
                products.filter(item => item.category == category).map(item =>(
                <div className="card" key = {item.prd_id}>
                    <Link to = {`${match.url}/${item.prd_id}`} >
                        <HoverImage className = "prdImages" src ={item.prd_img} hoverSrc ={item.prd_img2}></HoverImage>
                    </Link>
                    <div className="content">
                        <h3>
                            <Link to = {`${match.url}/${item.prd_id}`}>{item.prd_name}</Link>
                        </h3>
                        <span className = "price">${item.prd_price}.00</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

