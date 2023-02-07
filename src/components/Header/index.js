import React from 'react'
import "./style.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import {Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';


const Header = () => {
    const [{basket},dispatch] = useStateValue();
  return (
    <div className='header'>
        <Link to="/" style={{textDecoration:"none",display:"flex",justifyContent:"flex-start"}}>
            <div className="header_logo">
                    <StorefrontIcon style={{ color: '#b97800'}}/>
                <h3>Eshop</h3>
            </div>
        </Link>
        <div className="header_search">
            <input type="search"></input>
            <span className='search_icon'>
                <SearchIcon fontSize='2px'/>
            </span>
        </div>
        <div className="header_nav">
            <div className='nav_item'>
                <span className='nav_item_one'>Hello Guest</span>
                <span className='nav_item_two'>Sign In</span>
            </div>
            <div className='nav_item'>
                <span className='nav_item_one'>Your</span>
                <span className='nav_item_two'>Shop</span>
            </div>
            <div style={{display:"flex",alignItems:"self-end"}}>
                <Link  to="/checkout">
                    <ShoppingBasketIcon style={{color:"white"}} />
                </Link>
                <p>{basket.length}</p>
            </div>
            </div>
           
    </div>
  )
}

export default Header;
