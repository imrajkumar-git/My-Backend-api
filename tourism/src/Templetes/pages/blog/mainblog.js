import React, { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import Aos from 'aos';
import 'aos/dist/aos.css';
import 'react-bootstrap';


const Mainblog = ()=>{
  const [Api, setApi] =useState([]);


useEffect(()=>{

axios.get(`http://192.168.43.203:8888/api/blogs/${3}`)

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

       {Api.map(blog=>(<div>
         <div key={blog.id} className="card card-border-0 m-0 p-0" style={{transform: "none"}}><img className="site-overlay-image" src={blog.image} alt={blog.title} />
</div>

                  <div class="col-md-6 px-0" style={{position: "absolute", top:"70%"}}>
                    <h1 class="display-4 font-italic text-light"  >{blog.title}</h1>
                    <p class="lead my-3">{blog.slug}</p>
                    <p class="lead mb-0"><Link class="text-white font-weight-bold" to={"/Detailpage/"+blog.id}>Continue reading...</Link></p>
                </div>
         </div>
  
        ))}

 
  </>
  );
       }
  export default Mainblog;