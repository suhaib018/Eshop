import React from 'react'
import "./style.css"
import { useStateValue } from '../StateProvider'
const Product = ({title,price,rating,img,id}) =>{

    const [state,dispatch] = useStateValue();

    const addToBasket = ()=> {
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                img:img
            }
        })
    }
    return (
        <div className='product_container'>
            <p>{title}</p>
            <p>$<span style={{fontWeight:"bold"}}>{price}</span></p>
            <div style={{display:"flex"}}>
                {
                    Array(rating).fill().map((item,index)=>(
                        <p >⭐</p>
                ))}
            </div>
            <div className="image_container">
                <img src={img} alt="product" width="200px" height="200px"/>
                <button onClick={addToBasket}>Add to bascket</button>
            </div>
        </div>
    )
}

export default Product;