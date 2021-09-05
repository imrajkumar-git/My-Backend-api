import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
//import {Link} from 'react-router-dom';

import 'aos';
import marked from 'marked';
import 'react-bootstrap/dist/react-bootstrap';

const VisitDiscription = (props)=>{
    const [Api, setApi] =useState([]);
    const id = useParams();
    

    var id1 = id['id'];
    id1 = parseInt(id1);
  console.log(id1);
useEffect(()=>{

  axios.get(`http://192.168.43.203:8888/api/visit/${id1}`)

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
  <div>
    {
      Api && Api.map(newapi=>(
        
         <section className="mb-5 mt-5">

  <div className="row row-cols-md-2 bg">
   
          <div className="col-md-6 col-12 mb-0 mt-2 rounded ">
            <figure className="view overlay rounded z-depth-1 main-img">
              <a href={newapi.image}
                data-size="710x823">
                <img src={newapi.image} 
                  className="img-fluid z-depth-1 rounded shadow image-main img"  alt={newapi.name} />
              </a>
            </figure>
            
          </div>
    <div className="col-md-6 mt-2">

      <h4><b>{newapi.name}</b></h4>
      <p className="mb-2 text-muted text-uppercase small"><h6>Shirts</h6></p>
      <i className="fas fa-star fa-sm text-primary"></i>
          <i className="fas fa-star fa-sm text-primary"></i>
          <i className="fas fa-star fa-sm text-primary"></i>
          <i className="fas fa-star fa-sm text-primary"></i>
          <i className="fas fa-star fa-sm text-primary"></i>
          <i className="far fa-star fa-sm text-primary"></i>
     
      <p><span className="mr-1"><h5><b>PRICE: <span className="text-danger">Rs. <span id="price" name="price" value={newapi.price} >{newapi.price}3.00</span> </span></b></h5></span></p>
      <p className="pt-1">
        <div  dangerouslySetInnerHTML={{ __html: newapi.description }}></div></p>
      <div className="table-responsive">
        <table className="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th className="pl-0 w-25" scope="row"><h5><b> Delivery:</b></h5> </th>
              <td>Overall Nepal</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className="table-responsive mb-2">
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <td className="pl-0 pb-0 w-25 text-center"><h5><b> Quantity:</b> </h5></td>
              <td className="pb-0 text-center"><h5><b>Select size:</b> </h5></td>
            </tr>
            <tr>
              <td className="pl-0">
                <div className="def-number-input number-input safari_only mb-0">
                  <div className="btn-group">
                  <input className="quantity form-control" min="1" name="quantity" id="quantity" value="1" type="number" />
                  <input type="button" onclick={Function()} value="OK" />
                </div>
                  </div>
                
                
              </td>
              <td className="text-center">
                <div className="mt-1">
                  <div className="form-check form-check-inline pl-0">
                    <input type="radio" className="form-check-input" id="small" name="materialExampleRadios"
                      checked />
                    <label className="form-check-label small text-uppercase card-link-secondary"
                      for="small"><h6> Small</h6></label>
                  </div><br/>
                  <div className="form-check form-check-inline pl-0">
                    <input type="radio" className="form-check-input" id="medium" name="materialExampleRadios" />
                    <label className="form-check-label small text-uppercase card-link-secondary"
                      for="medium" ><h5> Medium</h5></label>
                  </div><br/>
                  <div className="form-check form-check-inline pl-0">
                    <input type="radio" className="form-check-input" id="large" name="materialExampleRadios" />
                    <label className="form-check-label small text-uppercase card-link-secondary"
                      for="large"><h4>Large</h4></label>
                  </div><br/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className="text-center">
        <h4><b>Your total amount is:</b></h4>
        <p>
          <input className="form-control text-center" id="disabledInput" value="bvcx" name="disabledInput" type="text" placeholder="Total Amount"  />
        </p>
        <div>
        <button type="button" className="btn btn-primary mt-4  mr-1 mb-5"><i
          className="fas fa-shopping-cart pr-2 fa-x"> Buy Now</i></button>
          </div>
      <div classNameName="footer mt-5 mb-1">
<i className="fas fa-share" aria-hidden="true">Share </i>
      </div>
    </div>
     
    </div>
   
  </div>
 

</section>

      
      ))
    }
  </div>
)

  }
 
export default VisitDiscription;

