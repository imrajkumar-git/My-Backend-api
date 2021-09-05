import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../Templetes/home';
import Detail from '../Templetes/detail';
import Card from '../Templetes/card';
import Blogs from '../Templetes/Blog';
import Blogdetail from '../Templetes/blogdetail';
import Vdiscription from '../Templetes/vdiscription';



const Router = ()=> {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact  component={Home}></Route>
                <Route path="/detail-page/:id" component={Detail}></Route>
                <Route path="/card" component={Card}></Route>
                <Route path="/blogs" component={Blogs}></Route>
                <Route path="/detailpage/:id" component={Blogdetail}></Route>
                <Route path="/detailvisit/:id" component={Vdiscription}></Route>
            </BrowserRouter>
        </div>
    )
}
export default Router;