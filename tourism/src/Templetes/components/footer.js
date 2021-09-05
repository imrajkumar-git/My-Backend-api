import React from 'react';

const Footer = ()=>{
    return(
   <div>
     <footer class="footer_widgets row mt-5 gx-3 " >
  <div class="footer_top">
      <div class="container">
          <div class="row">
              

              <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="widgets_container text-center">
                      <h3 class="texts_footer" >Information</h3>
                      <div class="footer_menu ">
                          <ul>
                              This website is in developing process we are making it perfect to use so give your feedback by contacting us.
                              
                          </ul>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="widgets_container contact_us text-center">
                      <h3 class="texts_footer">Contact Us</h3>
                      <div class="footer_contact text-center">
                          <p>Address: Kalanki, Kathmandu, Nepal</p>
                          <p>Phone: <a class="texts_footer" href="tel:+9779800000000" target="_blank">(+977) 9840738115</a> </p>
                          
                          <p>Email: <a class="texts_footer" href="mailto:sachinsubedi616@gmail.com" target="_blank">sachinsubedi616@gmail.com</a></p>
                          <p>Email: <a class="texts_footer" href="mailto:rajkumararyal444@gmail.com" target="_blank">rajkumararyal444@gmail.com</a></p>
                          <ul >

                              
                              <a class="texts_footer" href="https://www.facebook.com/" title="facebook" ><i class="fa fa-facebook" aria-hidden="true"></i></a>
                              <a class="texts_footer1" href="https://www.instagram.com/" title="instagram" ><i class="fa fa-instagram" aria-hidden="true"></i></a>
                          </ul>
                        
                      </div>
                  </div>
              </div>

              <div class="col-lg-4 col-md-6 col-sm-6">
                  <div class="widgets_container contact_us">
                      
                                                  
                     <h3 title="Subscribe us for take big opportunitys (We will send you email for diffrent news)" class="texts_footer text-center">Subscribe Newsletter</h3>

                      <div class="newleter-content">
                          
                           <div class="subscribe_form ">
                              <form action="index.html">
                                  <div class="text-center">
                                      <input type="email" name="subscriber_email" placeholder="Email Address" required="" class="texts_footer2"/><br/>
                                      <button class="btn btn-primary text-center">Subscribe Us</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                      
                  </div>

                  <div class="footer_custom_links text-center">
                     <br/> Don't Forget to give feedback. It helps us to make website better.
                  </div>

              </div>

          </div>
      </div>
  </div>
  <div class="footer_bottom">
      <div class="container">
         <div class="row">
              <div class="col-lg-12 col-md-12">
                  <div class="copyright_area text-center">
                      <p>Copyright © 2021 <a class="texts_footer" href="index.html">Tourism Np.com</a>  All Right Reserved.</p>
                  </div>
                  
              </div>
              
          </div>
      </div>
  </div>
</footer>


     </div>
    )
}
export default Footer;
