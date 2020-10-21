import React, { Component } from 'react'
import { products } from "../databases/database"


export default class Cart extends Component {
    state = {
        cart: []
    }

    addCart = (id: number) => {
        const {cart} = this.state;
        const data = products.filter(prd => {
            return prd.prd_id === id
        })
        console.log(data)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
