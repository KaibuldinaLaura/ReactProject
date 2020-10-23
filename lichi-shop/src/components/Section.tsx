import React, { Component } from 'react'
import { Route } from 'react-router'
import Categories from './Categories'
import Home from './Home'
import ProductDetail from './ProductDetail'
import Products from './Products'
import Cart from './Cart'
import "../index.css"
import Registration from "./Registration";
import NewClothes from "./NewClothes";


export default class Section extends Component {
    state = {}
    

    render() {
        return (
            <section>
                <Route path = "/" exact component = {Home}/>
                <Route path = "/categories" exact component = {Categories} />
                <Route path = "/categories/:id/products" exact component = {Products} />
                <Route path = "/categories/:catId/products/:prodId" component = {ProductDetail} />
                <Route path = "/card" component = {Cart} />
                <Route path = "/registration/" exact component = {Registration} />
                <Route path = "/newClothes/" exact component = {NewClothes} />

            </section>
        )
    }
}
