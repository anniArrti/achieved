import React, { Component } from 'react';
//import Layout from './../Layout/Layout';
//import axios from 'axios'; 
class Footer extends Component {
constructor(props){
  super(props);
  this.state={
  email: '',
  error:'',
  };
 }
 render() {
    return (
      <div>
      <div className="section subscribe-section section-pad-md section-bg">
           <div className="container">
              <div className="row text-center">
                 <div className="col-md-6 offset-md-3">
                    <h4 className="section-title-md">Don't miss out, Stay updated</h4>
                    <form id="mc4wp-form-1"onSubmit={this.handlemailchimpSubmit} className="mc4wp-form mc4wp-form-204" method="post" data-id="204" data-name="ICO Form">
                       <div className="mc4wp-form-fields"><input type="email" name="EMAIL" className="input-round required email" value={this.state.mailchimpemail} onChange={this.handleMailchimpEmail} placeholder="Enter your email address" required="" />
                          <button type="submit" className="btn btn-plane">Subscribe</button>
                       </div>
                       <label className="hidden">Leave this field empty if you're human: 
                          <input type="text" name="_mc4wp_honeypot" defaultValue="" tabIndex="-1" autoComplete="off" /></label><input type="hidden" name="_mc4wp_timestamp" defaultValue="1568627039" /><input type="hidden" name="_mc4wp_form_id" defaultValue="204" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1"/>
                       <div className="mc4wp-response"></div>
                    </form>                   
                 </div>
              </div>
           </div>
        </div>
        <footer className="section footer-section section-pad-sm section-bg">
   <div className="container">
      <div className="row text-center">
         <div className="col-md-12">
            <ul className="social">
               <li><a href="/"><em className="fa fa-facebook"></em></a></li>
               <li><a href="/"><em className="fa fa-twitter"></em></a></li>
               <li><a href="/"><em className="fa fa-youtube-play"></em></a></li>
               <li><a href="/"><em className="fa fa-github"></em></a></li>
               <li><a href="/"><em className="fa fa-bitcoin"></em></a></li>
               <li><a href="/"><em className="fa fa-medium"></em></a></li>
            </ul>
            <span className="copyright-text">
            Copyright © 2018 All trademarks and copyrights belong to their respective owners.</span>                        
         </div>
      </div>
   </div>
</footer>
   </div>
   );
}
}
export default Footer;
