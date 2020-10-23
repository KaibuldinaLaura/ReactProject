import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { products } from '../databases/database';
import { Product } from '../databases/entities';

interface Props {
    initialCount: number;
    product: Product
    prodId: number
}

export default function Counter({initialCount, product, prodId}: Props): ReactElement {

    const [count, setCount] = useState(initialCount);

    const reduce = (id: number, prd: Product) => {
        if(id === prd.prd_id) {
            setCount(prevCount => prevCount === 0? prevCount = 0: prevCount -= 1 )
        }
        prd.count = count + 1
    }
    const increase = (id: number, prd: Product) => {
        if(id === prd.prd_id) {
            setCount(prevCount => prevCount + 1)
        }
        prd.count = count + 1
    }
    useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
    

    return (
        <div>
            {
             products.filter(prd => prd.prd_id == prodId).map(item => (
                <div className = "details" key = {item.prd_id}>
                    <button  className = "btn" onClick  = {() => reduce(item.prd_id, item)}> - </button>
                    <span>{count}</span>
                    <button  className = "btn" onClick = {() => increase(item.prd_id, item)}> + </button>
                </div>
             ))}
        </div>
    );
}
