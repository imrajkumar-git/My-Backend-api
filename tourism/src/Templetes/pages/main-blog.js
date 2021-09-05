import React, { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import Aos from 'aos';
import 'aos/dist/aos.css';
//import { useParams } from 'react-router-dom';
import Mainblog from './blog/mainblog';
import Cardblog from './blog/cardblog';


 




const Blog = ()=>{
  const [Api, setApi] =useState([]);
  
  useEffect(()=>{
    axios.get(`http://192.168.43.203:8888/api/blogs/`)
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
             
            
{/* <!-- navbar scroll  --> */}
<Mainblog />

<div class="row mb-2 mt-2">
   
<Cardblog/>
</div>
<main class="container-fluid">
    <div class="row">
        <div class="col-md-8">
           {Api.map(blog=>(
                <div class="col-md-12 mt-3 mb-2" >
                <div className="cardgroup" >
             
                  
                   <Link key={blog.id} to={"/detailpage/"+blog.id}>
                  <div class="card shadow " >
                      <img src={blog.image} class="card-img-top p-1" style={{maxHeight:"500px"}} alt={blog.title}/>
                         <div class="card-body">
                           <h5 class="card-title ">{blog.title}</h5>
                           <p class="card-text  pt-2 py-auto"><h5>{blog.slug}...</h5></p>
                           </div>
                           <div className="card-subtitle text-danger p-1" style={{textAlign:"right", bottom:"100%"}}>
                            -{blog.author}
                           </div>
                           <div className="card-footer">
                           <p class="card-text"><small class="text-muted one-line">{blog.created_on}</small></p>
                         </div>
                       </div>
                 </Link>
             
                 </div>
                 </div>
           ))

           }
        </div>

        <aside class="col-md-4">
            <div class="p-4 mb-3 bg-light rounded">
                <h4 class="font-italic">About</h4>
                <p class="mb-0">Here you can read latest news and blogs. If you liked <em>TourismNP.com</em> then give us Feedback. It helps us to make website better.
                   </p>
            </div>
            <div class="p-4">
            <h4 class="font-italic">Archives</h4>
            <ol class="list-unstyled mb-0">
            {Api.map(blog=>(
            <Link  to={"/card"}>{blog.title}<br/></Link>
                   
            ))}
            </ol>
         </div>
            <div class="p-4">
                <h4 class="font-italic">Elsewhere</h4>
                <ol class="list-unstyled">
                    <li><a href="www.github.com/Sachinsubedi293" target="_blank">GitHub</a></li>
                    <li><a href="www.twitter.com">Twitter</a></li>
                    <li><a href="www.facebook.com">Facebook</a></li>
                </ol>
            </div>
        </aside>

    </div>

</main>
    </>
 
  );
  }
  export default Blog;