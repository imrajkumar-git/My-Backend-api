import React, { useEffect,useState} from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import 'react-bootstrap';
import { Link } from 'react-router-dom';



const Recommended = ()=>{
  const [Api, setApi] =useState([]);


  useEffect(()=>{
  
  axios.get(`http://192.168.43.203:8888/api/visit/${5}`)
  
  .then((res)=>{
    var arr = [];
    arr.push(res.data);
    setApi(arr);
    console.log(arr);
  })
  .catch((err)=>{
    console.log(err);
  })
  },[])

  const [Api1, setApi1] =useState([]);


  useEffect(()=>{
  
  axios.get(`http://192.168.43.203:8888/api/visit/${6}`)
  
  .then((res)=>{
    var arr = [];
    arr.push(res.data);
    setApi1(arr);
    console.log(arr);
  })
  .catch((err)=>{
    console.log(err);
  })
  },[])

  const [Api2, setApi2] =useState([]);


  useEffect(()=>{
  
  axios.get(`http://192.168.43.203:8888/api/visit/${7}`)
  
  .then((res)=>{
    var arr = [];
    arr.push(res.data);
    setApi2(arr);
    console.log(arr);
  })
  .catch((err)=>{
    console.log(err);
  })
  },[])

  const [Api3, setApi3] =useState([]);


  useEffect(()=>{
  
  axios.get(`http://192.168.43.203:8888/api/visit/${8}`)
  
  .then((res)=>{
    var arr = [];
    arr.push(res.data);
    setApi3(arr);
    console.log(arr);
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
     <div class="card shadow  mt-3 mb-3 me-3 ms-4" style={{maxHeight:"520px", height:"480px"}}>
            <img src={card.image} class="card-img-top p-1" style={{maxHeight:"250px"}} alt={card.name}/>
            <div class="card-body">
              <h4 class="card-title b">{card.title}</h4>
              <p class="card-text text-dark pt-2 py-auto"><h6>{card.name}...</h6></p>
              </div>
              <div className="card-subtitle text-danger p-1" style={{textAlign:"right", bottom:"100%"}}>
                            -{card.author}
                           </div>
              <div className="card-footer">
              <p class="card-text"><small class="text-muted one-line">{card.created_on}</small></p>
            </div>
          </div>
    </Link>

    </div>
    </div>   ))}  
    
   {Api1.map(card=>( 
    <div class="col-md-3" >
   <div className="cardgroup" >

     
      <Link key={card.id} to={"/detail-page/"+card.id}>
     <div class="card shadow  mt-3 mb-3 me-3 ms-4" style={{maxHeight:"520px", height:"480px"}}>
            <img src={card.image} class="card-img-top p-1" style={{maxHeight:"250px"}} alt={card.name}/>
            <div class="card-body">
              <h4 class="card-title b">{card.title}</h4>
              <p class="card-text text-dark pt-2 py-auto"><h6>{card.name}...</h6></p>
              </div>
              <div className="card-subtitle text-danger p-1" style={{textAlign:"right", bottom:"100%"}}>
                            -{card.author}
                           </div>
              <div className="card-footer">
              <p class="card-text"><small class="text-muted one-line">{card.created_on}</small></p>
            </div>
          </div>
    </Link>

    </div>
    </div>   ))}

  {Api2.map(card=>( 
 <div class="col-md-3" >
 <div className="cardgroup" >

   
    <Link key={card.id} to={"/detail-page/"+card.id}>
   <div class="card shadow  mt-3 mb-3 me-3 ms-4" style={{maxHeight:"520px", height:"480px"}}>
          <img src={card.image} class="card-img-top p-1" style={{maxHeight:"250px"}} alt={card.name}/>
          <div class="card-body">
            <h4 class="card-title b">{card.title}</h4>
            <p class="card-text text-dark pt-2 py-auto"><h6>{card.name}...</h6></p>
            </div>
            <div className="card-subtitle text-danger p-1" style={{textAlign:"right", bottom:"100%"}}>
                          -{card.author}
                         </div>
            <div className="card-footer">
            <p class="card-text"><small class="text-muted one-line">{card.created_on}</small></p>
          </div>
        </div>
  </Link>

  </div>
  </div>   ))}

  {Api3.map(card=>( 
  <div class="col-md-3" >
  <div className="cardgroup" >

    
     <Link key={card.id} to={"/detail-page/"+card.id}>
    <div class="card shadow  mt-3 mb-3 me-3 ms-4" style={{maxHeight:"520px", height:"480px"}}>
           <img src={card.image} class="card-img-top p-1" style={{maxHeight:"250px"}} alt={card.name}/>
           <div class="card-body">
             <h4 class="card-title b">{card.title}</h4>
             <p class="card-text text-dark pt-2 py-auto"><h6>{card.name}...</h6></p>
             </div>
             <div className="card-subtitle text-danger p-1" style={{textAlign:"right", bottom:"100%"}}>
                           -{card.author}
                          </div>
             <div className="card-footer">
             <p class="card-text"><small class="text-muted one-line">{card.created_on}</small></p>
           </div>
         </div>
   </Link>

   </div>
   </div>   ))}
 
  </>
  );
       }
  export default Recommended;