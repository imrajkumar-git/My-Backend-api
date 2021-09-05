import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';





const Carousel = ()=>{
    const [Api, setApi] =useState([]);
    
    useEffect(()=>{
      axios.get(`http://192.168.43.203:8888/api/pictures/`)
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
            
         
            <div id="c" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#c" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    {Api.map(card=>( 
    <button type="button" data-bs-target="#c" data-bs-slide-to={card.id} aria-label={"Slide "+card.id}></button>   ))}
    

  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">

      <img src="Resources/pokhara.jpg" class="d-block w-100" alt="" />
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
        <img src={card.image} class=" " alt={card.title} style={{maxHeight:"620px"}} />
        <div class="carousel-caption d-none d-md-block">
         <b>
<h3 className="text-danger" style={{backgroundColor:"#7e7e8562"}}>
  {card.title}
</h3>
          </b>
           <div class="slider-btn">
         <Link to={"/detail-page/"+card.id}><button class="btn btn-1 btn btn-outline-danger ">Know More</button></Link>
        
         </div>
       </div>
      </div>))}
    
       
  <button class="carousel-control-prev" type="button" data-bs-target="#c"  data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  
  <button class="carousel-control-next" type="button" data-bs-target="#c"  data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>


          
       
        </>
        );
             }
 export default Carousel;