import React from 'react'
import { useStateValue } from '../StateProvider'
import "./style.css"
import { getBasketTotal } from '../Reducer'
const Checkout = () => {
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket =  (id) =>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return (
    
        <React.Fragment>
        <div className="container">
            {/* Header */}
            <div style={{width:"75%"}}>
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="advertisment" width="100%" />
                <h3>Your Shopping Basket</h3>
            </div>
            <div className="subtotal">
                <p>Subtotal({basket.length} items):<span>{getBasketTotal(basket)}</span></p>
                <button>Procced to checkout</button>
            </div>
            {/* End Header */}
        </div> 

        {
            basket.length&&basket.map(item =>{
                return (
                    <div className="checkout_product" key={item.id}>
                        <img src={item.img} alt="advertisment" width="10%" height="100%" />
                        <div style={{display:"flex",flexDirection:"column",}}>
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                            <p style={{display:"flex",flexDirection:"row",marginLeft:"20px"}}>
                            {
                                Array(item.rating).fill().map((item,index)=>(
                                    <p style={{margin:"0px"}}>⭐</p>
                            ))}                
                            </p>
                            <button style={{width:"30%"}} onClick={()=>removeFromBasket(item.id)}>Remove from Basket</button>
                        </div>
                    </div>
        )})}
        </React.Fragment>
 )
}

export default Checkout;