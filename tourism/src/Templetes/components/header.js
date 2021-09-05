import React from 'react';
import Logo from '../pages/Resources/logo.gif'
import {Link} from 'react-router-dom';
import 'react-bootstrap';

const Header = ()=>{    
    return(

      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" role="navigation" >
      <div class="container-fluid" >
         
          <Link class="navbar-brand" to={"/"} > <img src={Logo} alt="logo"  height="48px"/></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#a" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
    
            <div class="collapse navbar-collapse " id="a">
                <ul class="navbar-nav mx-auto text-center" >
                  
                <Link class="nav-link active rounded c1 c2" to={"/"} ><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
                  <Link class="nav-link active rounded c1 c2" aria-current="page" to={"/card"}><i class="fa fa-shopping-basket" aria-hidden="true"></i> Shop Now</Link>
                  <Link class="nav-link active rounded c1 c2" aria-current="page" to={"/Blogs"}><i class="fa fa-newspaper-o" aria-hidden="true"></i> Blogs</Link>
                  <a class="nav-link active rounded c1 c2" aria-current="page" href=" #about"><i class="fa fa-id-card" aria-hidden="true"></i> About us</a>
                  <a class="nav-link active rounded c1 c2" aria-current="page" href=" #services"><i class="fa fa-list" aria-hidden="true"></i> Our Services</a>
                  <a class="nav-link active rounded c1 c2" aria-current="page" href=" #contact"><i class="fa fa-phone" aria-hidden="true"></i> Contact us</a>
              

                </ul> 
    </div>
    </div>
    </nav>
    )
}
export default Header;