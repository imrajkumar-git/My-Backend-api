import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Blog from './pages/main-blog';

const Blogs = ()=>{
    return(
        <div>
            <Header />
            <Blog />
            <Footer />
        </div>
    )
}
export default Blogs;