import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Popular from './body/popular';
import Recommended from './body/recommended';
import { Card } from 'react-bootstrap';
import Carousel from './body/carousel';

const Body = ()=>{
const [Api, setApi] =useState([]);

useEffect(()=>{
  axios.get(`http://192.168.43.203:8888/api/visit/`)
  .then((res)=>{
    console.log(res.data);

    setApi(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })
},[])




return(
<>
{/* <!-- Navbar close -->  */}
{/* <!-- carocel -->  */}
<div id="b" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#b" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    {Api.map(card=>( 
    <button type="button" data-bs-target="#b" data-bs-slide-to={card.id} aria-label={"Slide"+card.id}></button>   ))}
    

  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">

      <img src="Resources/kathmandu.jpg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
         <b> <h3 class="text_car1 "  style={{backgroundColor:"#7e7e8562"}}>
           If you Liked our Website then please give us Feedback.
 </h3></b>
        <div class="slider-btn">
        <button class="btn btn-1 btn btn-outline-light">Feedback</button>
        
        </div>
      </div>
    </div>
    {Api.map(card=>(<div class="carousel-item">
        <img src={card.image} class=" " alt={card.name} style={{maxHeight:"620px"}} />
        <div class="carousel-caption d-none d-md-block">
         <b>
<h3 className="text-danger" style={{backgroundColor:"#7e7e8562"}}>
  {card.name}
</h3>
          </b>
           <div class="slider-btn">
         <Link to={"/detail-page/"+card.id}><button class="btn btn-1 btn btn-outline-danger ">Know More</button></Link>
        
         </div>
       </div>
      </div>))}
    
       
  <button class="carousel-control-prev" type="button" data-bs-target="#b"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  
  <button class="carousel-control-next" type="button" data-bs-target="#b"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

{/* <!-- carocel close -->  */}
  <div class="container-fluid mt-2" data-aos="fade-up" data-aos-offset="200"  >
    <div class="row">
      <div class="col-md-19 col-12 mx-auto shadow row-cols-md-1 nep">
     <div class="row">
        <div class="col-md-7 col-11 mx-auto  mt-2 mb-2 "  >
          <b><h1 class="d-flex justify-content-center">Nepal</h1> </b>
                <div class="row">
                    {/* <!--  images div -->  */}
                    
                    <div class="col-md-10 col-11 mx-auto bg-light d-flex justify-content-center align-item-center  shadow " data-aos="fade-left" data-aos-offset="-50">
                      <img src="Resources/nepal.jfif" class="img-fluid" alt="cart-img"/>
                    </div>
                    {/* <!-- details -->  */}
                    <div class="col-md-0 col-11 mx-auto px-4 mt-2 ">
                        <div class="col ">
                            
                            <div class="col-0 card-title " data-aos="fade-right" data-aos-offset="-500"  >
                             
                               <p class="mb-1 nep1 text-center"> Nepal is a country of highly diverse and rich geography, culture, religions and political instability. The mountainous north contains eight of the world’s ten highest Himalayan Mountains, including the highest, Mount Everest. Nepal’s faces many problems caused by governmental clashes, surrounded by the complex situation that is Nepalese politics. 

                                The fertile and humid south is heavily urbanized. By some measures, Hinduism is practiced by a greater majority of people in Nepal than in any other nation. As of the 2011 census, 81.3 of the Nepalese population is Hindu, 9.0% is Buddhist, 4.4% is Muslim, 3.0% is Kirant/Yumaist, 1.4% is Christian, and 0.9% follow other religions or none religion. The natural scenery, high mountains,…show more content…
                                Therefore, the government is placing high priority on the tourism sector in its new economic development policy. As there is a favorable political situation in the country, the government is all geared towards economic revolution in the next 10 years to uplift mass. In this connection, government of Nepal in consultation with Nepalese Tourism Industry, concerned organizations and experts decided to launch a national tourism campaign “Nepal Tourism Year 2011“. This announcement reflects the government’s anticipation to bring into at least one million international tourists in Nepal by the year 2011 and spread the benefits of tourism to the people at large. The national campaign also indicates the tourism industry’s exigency to organize a tourism promotion campaign having wider impact.
                               </p>
                              </div>
                        </div>
                    </div>
                </div>
               </div>
             </div>
        </div>
      </div>



{/* // <!-- card 1 -->  */}
<div class="row mt-2 ms-2 me-2 mb-2"  data-aos="fade-in" data-aos-offset="-50" >
  <div class="col-md-19 col-12 mx-auto shadow ">
    <p><i class="fa fa-search text-muted" aria-hidden="true"> Popular in this Month </i><hr/></p>
<div class="row row-cols-1 row-cols-md-4 g-4" data-aos="fade-in" data-aos-offset="200" >
 <Popular />
</div>
</div>
</div>


  {/* carousel  */}
<Carousel/>

{/* <!-- youtube -->  */}

{/* <!-- second cards -->  */}
{/* <!-- card 1 -->  */}
<div class="row mt-2 ms-2 me-2 mb-2"  data-aos="fade-in" data-aos-offset="-50" >
  <div class="col-md-19 col-12 mx-auto shadow ">
    <p><i class="fa fa-search text-muted" aria-hidden="true"> Recommended for you for this Month </i><hr/></p>
<div class="row row-cols-1 row-cols-md-4 g-4" data-aos="fade-in" data-aos-offset="200" >
  
 <Recommended />
  
 
</div>
</div>

{/* <!-- About us  -->  */}
<a name="about"></a>
<div class="container-fluid  pb-3 mb-3" data-aos="zoom-in">
  <div class="row">
    <div class="col text-center">
<h2 class="ser">About us</h2>
      <div class="row row-cols-md-2" >
        <div class="col  text-center shadow  services  mt-2" >
          <h3></h3>
         <p>
          Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.         </p>
          <p>Nepal with rich ancient cultures set against the most dramatic scenery in the world is a land of discovery and unique experience. For broad minded individuals who value an experience that is authentic and mesmerizing, Nepal is the ideal destination.</p>
          <p>So, Nepal</p>
        </div>
        <div class="col shadow   services mt-2 text-center" >
         <img src="Resources/tourist-take-pictures-at-poonhill-(2).jpg" class="img-about" alt="" />
        </div>
        
      </div>
      <div class="col  text-center shadow mb-2 services " >
        <div class="row row-cols-md-2" >

          <div class="col  text-center shadow mb-2 services ser" data-aos="zoom-in-up">
            <img src="Resources/kumar.png" class="rounded-circle" alt="Kumar"/>
             <h4>Rajkumar Aryal</h4>
             <h6></h6>
          </div>
          <div class="col  text-center shadow mb-2 services ser"data-aos="zoom-in-down" >
            <img src="Resources/kumar.png" class="rounded-circle" alt="Kumar"/>
             <h4>Rajkumar Aryal</h4>
             <h6></h6>
          </div>
</div>
        <div class="row row-cols-md-3" >
          <div class="col  text-center shadow mb-2 services ser" data-aos="zoom-in-up" >
            <img src="Resources/kumar.png" class="rounded-circle" alt="Kumar"/>
             <h4>Rajkumar Aryal</h4>
             <h6></h6>
          </div>
          <div class="col  text-center shadow mb-2 services ser" data-aos="zoom-in"  >
            <img src="Resources/kumar.png" class="rounded-circle" alt="Kumar"/>
             <h4>Rajkumar Aryal</h4>
             <h6></h6>
          </div>
          <div class="col  text-center shadow mb-2 services ser" data-aos="zoom-in-down"  >
            <img src="Resources/kumar.png" class="rounded-circle" alt="Kumar"/>
             <h4>Rajkumar Aryal</h4>
             <h6></h6>
          </div>
</div>
       
      </div>
    </div>
  </div>

{/* <!-- services  -->  */}
<a name="services"></a>

<div class="container-fluid " data-aos="zoom-in">
  <div class="row-md-12 ">
    <div class="col-md-12  text-center">
<h1 class="ser">Our Services</h1>
      <div class="row row-col-md-5 mb-2" >
        <div class="col shadow mb-2  text-center services me-3 ms-3 mt-2" data-aos="fade-down">
          <i class="fas fa-hospital fa-7x mt-1 mb-1 me-1 ms-1" aria-hidden="true">  <h3>Health Care</h3></i>           
         <p>
           We can take care of anyone traval from this website from different disasters, diseases.
         </p>
        </div>
        <div class="col shadow mb-2 services me-3 ms-3 mt-2 text-center" data-aos="fade-up">
          <i class="fas fa-truck fa-7x mt-1 mb-1 me-1 ms-1" >   <h3>Delivary</h3></i>
          
         
  <p>
If you can buy products from this website then we delevere to you in low cost.
  </p>      </div>
        <div class="col shadow mb-2 services me-3 ms-3 mt-2 text-center" data-aos="fade-down" >
          <i class="fab fa-glide  fa-7x mt-1 mb-1 me-1 ms-1"> <h3>Guide</h3></i>
           
         
  <p>
We can help you and try to borrow you a guider.
  </p>      </div>
        <div class="col shadow mb-2 services me-3 ms-3 mt-2 text-center" data-aos="fade-up" >
          <i class="fas fa-hotel fa-7x mt-1 mb-1 me-1 ms-1" ><h3>Hotel Booking</h3></i>
        
       <p>
This service is for booking hotels from any country and region in thios word.
       </p>
      </div>
     <div class="col shadow mb-2 services me-3 ms-3 mt-2 text-center" data-aos="fade-down" >
      <i class="fab fa-discourse fa-7x mt-1 mb-1 me-1 ms-1" ><h3>Free language cource</h3></i>
            
         
  <p>
We can give free Nepali language cource for those people who wants to learn.
  </p>    
  </div>
        <div class="col shadow mb-2 services me-3 ms-3 mt-2 text-center" data-aos="fade-up" >
         <i class="fab fa-paypal fa-7x mt-1 mb-1 me-1 ms-1"><h3>Online pay</h3>
         </i>
            <p>
We can take money in online medium so you dont need cash in your journey.
            </p>
         
        </div>
        
      </div>
    </div>
  </div>
</div>
</div>
</div>

</div>
<a name="contact"></a>

    
   
{/* test section  */}

   </>
);
}
export default Body;