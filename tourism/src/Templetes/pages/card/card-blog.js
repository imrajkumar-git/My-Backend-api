import React, { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import Aos from 'aos';
import 'aos/dist/aos.css';
import 'react-bootstrap';


const Card_Blog = ()=>{
  const [Api, setApi] =useState([]);


useEffect(()=>{

axios.get(`http://192.168.43.203:8888/api/blogs/${4}`)

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

  
  
  return(
  <>

       {Api.map(card=>( 
                
                  <div className="card text-center" style={{transform:"none"}}>
                    <div class="card-header">  <img src={card.image} alt={card.name} style={{maxWidth:"1000px"}} />
                    </div>
                  
                    <div className="row text-center pb-3" >
                      <div class="col-md-12 text-center">
                        <h1> {card.title}</h1>
                      </div>
                      <div class="col-md-12 text-center">
                        <h1> {card.slug}</h1>
                      </div>
                   
                   <div class="col-md-12 text-center">
                    <div className="">
                      <Link to={"/Detailpage/"+card.id}><input type="button" className="btn btn-outline-danger" value="Know More" /></Link> 
                        </div>
                   </div>
                  </div>
                </div>
                   
              
                
        ))}

 
  </>
  );
       }
  export default Card_Blog;