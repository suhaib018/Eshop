import React from 'react'
import Product from '../../components/Product'
import "./style.css"
import {data} from "../../data/index"

const Home = () => {
  return (
    <div style={{background:"rgb(232 229 229)"}}>
        <div>
            <img src='../assets/images/ecommerce.jpg' width="100%" alt='ecommerce-img'/>
        </div>
        <div className="grid_container">
            {
            data.map((item,index)=>(
                <div style={{background:"white",padding:"20px",gridColumn:index<2?"span 3":"span 2"}} key={item.id}>
                    <Product title={item.title} price={item.price} img={item.image} rating={item.rating} id={item.id}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home;
