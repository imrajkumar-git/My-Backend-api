import React from 'react';
import Footer from './components/footer';
import Header from './pages/components/header';
import Blog_detail from './pages/blog/blogdetails';

const Blogdetail = ()=>{
    return(
        <div>
            <Header/>
            <Blog_detail/>
            <Footer/>
        </div>
    )
}
export default Blogdetail;