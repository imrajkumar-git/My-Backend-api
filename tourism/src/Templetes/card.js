import React from 'react';
import Footer from './components/footer';
import Header from './pages/components/header';
import Product_card from './pages/card';

const Card = ()=>{
    return(
        <div>
            <Header/>
            <Product_card/>
            <Footer/>
        </div>
    )
}
export default Card;