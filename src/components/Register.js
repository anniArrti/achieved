import React, { Component } from 'react';
import Layout from './../Layout/Layout';
import Footer from './../Layout/Footer';
import axios from 'axios'; 
class Register extends Component {
constructor(props){
  super(props);
  this.state={
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  confirmpassword:'',
  phoneno: '',
  error:'',
  confirmpassword_err:'',
  };
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePasswordChange = this.handlePasswordChange.bind(this);
  this.handlefirstnameChange = this.handlefirstnameChange.bind(this);
  this.handlelastnameChange = this.handlelastnameChange.bind(this);
  this.handlephonenumberChange = this.handlephonenumberChange.bind(this);
  this.handleconfirmpasswordChange = this.handleconfirmpasswordChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
 }
handleEmailChange(e) {
   this.setState({email: e.target.value});
}
handlePasswordChange(e) {
   this.setState({password: e.target.value});
}
 handlefirstnameChange(e) {
  this.setState({firstname: e.target.value});
}
 handlelastnameChange(e) {
   this.setState({lastname: e.target.value});
}
handlephonenumberChange(e) {
   this.setState({phoneno: e.target.value});
}
 handleconfirmpasswordChange(e) {
  this.setState({confirmpassword: e.target.value});
  if(e.target.value !== this.state.password){
    this.setState({confirmpassword_err: 'Password Not Matching'});
  }else{
    this.setState({confirmpassword: e.target.value});
    this.setState({confirmpassword_err: ''});
  }
}
handleChange(e) {
   this.setState({password: e.target.value});
}
 handleSubmit(event) {
  event.preventDefault();
  if(this.state.password === this.state.confirmpassword){
    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      mobileNumber: this.state.phoneno
    };
   axios.post('http://localhost:8000/api/register', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        if(res.data.data !== 'Record has been Inserted')
        {
          this.setState({error: res.data.data});
          setTimeout(() => {
            this.setState({error: ''});
          }, 5000);
        }
      })
  }else{
    this.setState({confirmpassword_err: 'Password Not Matching'});
  } 
}
render() {
  const { confirmpassword_err, error } = this.state;
    return (
      <div>
        <Layout />
      <div className="row padding-section">
          <div className="col-sm-2"></div>
          <div className="wpb_column vc_column_container col-sm-12">
             <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                   <div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container vc_col-sm-12 animated fadeInUp registervisible">
                         <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                               <div className="section-head text-center">
                                  <h2 className="section-title">
                                     Create Account                  
                                  </h2>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="wpb_text_column wpb_content_element  vc_custom_1520932193361 text-center">
                      <div className="wpb_wrapper">
                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </div>
                   </div>
                   <div className="row wpb_row vc_inner vc_row-fluid">
                   <div className="col-sm-2" />
                      <div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container col-sm-12 vc_col-md-offset-2 col-md-8 animated fadeInUp visiblty">
                         <div className="vc_column-inner ">
                            <div className="wpb_wrapper">
                               
                               <div role="form" className="wpcf7" id="wpcf7-f301-p476-o1" lang="en-US" dir="ltr">
                                  <div className="screen-reader-response"></div>
                                  <form onSubmit={this.handleSubmit} className="wpcf7-form" noValidate="noValidate">
                                     
                                     <div className="comment-form text-center">
                                        <div className="form-results"></div>
                                        <div className="input-field input-focused">
                                           <span className="wpcf7-form-control-wrap your-name">
                                           <input type="text" name="your-name" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-line" aria-required="true" aria-invalid="false" value={this.state.firstname} onChange={this.handlefirstnameChange} /></span><label className="input-title">First Name</label>
                                        </div>
                                        <div className="input-field input-focused">
                                           <span className="wpcf7-form-control-wrap your-name"><input type="text" name="last-name" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-line" aria-required="true" value={this.state.lastname} onChange={this.handlelastnameChange} /></span><label className="input-title">Last Name</label>
                                        </div>
                                        <div className="input-field input-focused">
                                           <span className="wpcf7-form-control-wrap your-name"><input type="email" name="email" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-line" aria-required="true" value={this.state.email} onChange={this.handleEmailChange}  /></span><label className="input-title">Email Address</label>
                                        </div>
                                        <div className="input-field input-focused">
                                           <span className="wpcf7-form-control-wrap your-name"><input type="number" name="phone-number" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-line" aria-required="true" value={this.state.phoneno} onChange={this.handlephonenumberChange} /></span><label className="input-title">Phone Number</label>
                                        </div>
                                        <div className="input-field input-focused">
                                           <span className="wpcf7-form-control-wrap your-email"><input type="password" name="password" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email input-line" value={this.state.password} onChange={this.handlePasswordChange} autoComplete="off" /></span><label className="input-title">Password</label>
                                        </div>
                                        <div className="input-field input-focused">
                                           <span className="wpcf7-form-control-wrap your-email">
                                           <input type="password" name="confirm_password" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email input-line" value={this.state.confirmpassword} onChange={this.handleconfirmpasswordChange} autoComplete="off" />
                                           </span>
                                           <label className="input-title">Confirm Password</label>
                                           <span>{confirmpassword_err}</span>
                                        </div>
                                        
                                        <div className="input-field">
                                          <input type="Submit" className="btn" defaultValue="Submit" />
                                        </div>
                                        <p className="error">{ error }</p>
                                        <div className="create-accout">
                                          <p>Have already an account? <a href="/login">Login here</a></p>
                                        </div>
                                     </div>
                                     <div className="wpcf7-response-output wpcf7-display-none"></div>
                                  </form>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <Footer />
      </div>
      );
}
}
export default Register;