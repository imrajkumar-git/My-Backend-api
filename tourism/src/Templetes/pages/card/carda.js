import React, { useEffect,useState} from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import 'react-bootstrap';

import { Link } from 'react-router-dom';



const Carda = ()=>{
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
      
   
    {Api.map(card=>( 
       <div class="col-md-3" >
   <div className="cardgroup" >

     
      <Link key={card.id} to={"/detail-page/"+card.id}>
     <div class="card shadow  mt-3 mb-3 me-5 ms-4" style={{maxHeight:"520px", height:"480px"}}>
            <img src={card.image} class="card-img-top p-1" style={{maxHeight:"250px"}} alt={card.name}/>
            <div class="card-body">
              <h6 class="card-title ">{card.name}</h6>
              <p class="card-text text-danger pt-2 py-auto"><h5>Rs.{card.price}</h5></p>
              </div>
              <div className="card-footer">
              <p class="card-text"><small class="text-muted one-line">{card.created}</small></p>
            </div>
          </div>
    </Link>

    </div>
    </div>
  
  
    ))}
    
 
  </>
  );
       }
  export default Carda;