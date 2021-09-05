import React, { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import Aos from 'aos';
import 'aos/dist/aos.css';
//import { useParams } from 'react-router-dom';
import Carda from './card/carda';
import Card_Blog from './card/card-blog';
import Popularcard from './card/popularcard';





const Card = ()=>{
  const [Api, setApi] =useState([]);
  
  useEffect(()=>{
    axios.get(`http://192.168.43.203:8888/api/products/`)
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
            <div className="container-fluid">
           <Card_Blog />
           </div>
      {/* <!--now-->  */}
        <h2><strong><p className=" text-center" data-aos="zoom-in-up"  data-aos-offset="-50"  > PRODUCTS<hr/></p></strong> </h2>
       
        <div class="col-md-12">
    <div class="row mt-2 pb-3">    
<Carda />
        </div> 
        </div>
 
        
    
       
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
          {/* <!-- then  -->  */}
          <div className="row mt-2 ms-2 me-2 mb-2"  data-aos="fade-in" data-aos-offset="-50" >
            <div className="col-md-19 col-12 shadow ">
              <p><i className="fa fa-search text-muted" aria-hidden="true" style={{left:"2%"}}>Top Products...</i><hr/></p>
              <div className="row row-cols-1 row-cols-md-4 g-4" data-aos="fade-in" data-aos-offset="200" >
             <Popularcard/>
            </div>
            </div>
          </div>




  
    </>
 
  );
  }
  export default Card;