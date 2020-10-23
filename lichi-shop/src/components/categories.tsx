import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Categories.css"
import { DataContext } from "../databases/DataProvider"
import HoverImage from 'react-hover-image'
import 'react-medium-image-zoom/dist/styles.css'
import { RouteChildrenProps } from "react-router";



export default class Categories extends Component<RouteChildrenProps> {

    static contextType = DataContext; 
         
    render() {
        const {categories} = this.context;
        const match = this.props.match?.url

        return (
            <div id = "category">
                <div className = "topCategories">
                    <nav>
                        { categories.map((cat: { cat_id: number; cat_name: string; cat_image: string; cat_image2: string}) =>  (
                           <ul className = 'topCategoriesList'>
                                <a href={`categories/${cat.cat_id}/products`}><li>{cat.cat_name}</li></a>
                            </ul>
                        ))
                        }    
                    </nav>    
                </div>
                { 
                    categories.map((cat: { cat_id: number; cat_name: string; cat_image: string; cat_image2: string}) =>  (
                        <div className="card" key = {cat.cat_id}>
                            <Link to = {`categories/${cat.cat_id}/products`}>
                               <HoverImage className = "catImages" src={cat.cat_image} hoverSrc = {cat.cat_image2}/>
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to = {`categories/${cat.cat_id}/products`}>{cat.cat_name}</Link>
                                </h3>
                            </div>
                        </div>
                    ))
                    
                }
            </div>
        )
    }
}
