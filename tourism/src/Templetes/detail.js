import React from 'react';
import Footer from './components/footer';
import Header from '../Templetes/pages/components/header';
import Detail_page from './pages/detailpage';

const Detail = ()=>{
    return(
        <div>
            <Header/>
            <Detail_page/>
            <Footer/>
        </div>
    )
}
export default Detail;