import React, { Component } from 'react';
import Layout from './../Layout/Layout';
import Footer from './../Layout/Footer';
import axios from 'axios'; 
class ForgotPassword extends Component {
constructor(props){
  super(props);
  this.state={
  email: '',
  error:'',
  pin:'',
  requestId:'',
  };
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handlepinChange = this.handlepinChange.bind(this);
  this.handleverify = this.handleverify.bind(this);
 }
handleEmailChange(e) {
   this.setState({email: e.target.value});
}
handlepinChange(e){
  this.setState({pin: e.target.value});
}
handleSubmit(event) {
  event.preventDefault();
    const user = {
      email: this.state.email,
    };
   axios.post('http://localhost:8000/api/forgotpassword', { user })
      .then(res => {
        console.log(res.data.data);
        this.setState({requestId: res.data.data.request_id});
        // if(res.data.data !== 'Send Email')
        // {
        //   this.setState({error: res.data.data});
        //   setTimeout(() => {
        //     this.setState({error: ''});
        //   }, 5000);
        // }
      })
}
handleverify(event){
  event.preventDefault();
    const user = {
      pin: this.state.pin,
      requestId: this.state.requestId,
    };
    console.log(user);
    axios.post('http://localhost:8000/api/verifypin', { user })
      .then(res => {
       // console.log(res.data.data);
       // this.setState({requestId: res.data.data.request_id});
        // if(res.data.data !== 'Send Email')
        // {
        //   this.setState({error: res.data.data});
        //   setTimeout(() => {
        //     this.setState({error: ''});
        //   }, 5000);
        // }
      })
}
 render() {
  const { error } = this.state;
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
                                    FORGET YOUR PASSWORD?                
                                  </h2>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div className="wpb_text_column wpb_content_element  vc_custom_1520932193361 text-center">
                      <div className="wpb_wrapper">
                         <p>Please enter the email address registered on your account.</p>
                      </div>
                   </div>
                  <div className="row wpb_row vc_inner vc_row-fluid">
                    <div className="col-sm-2"></div>
                      <div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container col-sm-12 vc_col-md-offset-2 col-md-8 animated fadeInUp">
                        <div className="vc_column-inner ">
                          <div className="wpb_wrapper">            
                          <div role="form" className="wpcf7" id="wpcf7-f301-p476-o1" lang="en-US" dir="ltr">
                            <div className="screen-reader-response"></div>
                            <form onSubmit={this.handleSubmit} className="wpcf7-form" noValidate="noValidate">
                               <div className="comment-form text-center">
                                  <div className="form-results"></div>
                                    <div className="input-field input-focused">
                                     <span className="wpcf7-form-control-wrap your-name">
                                      <input type="email" name="email" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-line"  value={this.state.email} onChange={this.handleEmailChange} />
                                      </span>
                                      <label className="input-title">Email Address/Mobile Number</label>
                                  </div>
                                  <p className="error">{ error }</p>
                                  <div className="input-field">
                                    <input type="Submit" className="btn" defaultValue="Reset Password" />
                                  </div>
                               </div>
                               <div className="wpcf7-response-output wpcf7-display-none"></div>
                            </form>
                            <form onSubmit={this.handleverify} className="wpcf7-form hidden">
                            <input name="pin" required="" type="number" placeholder="1234" value={this.state.pin} onChange={this.handlepinChange} />
                            <input name="requestId" type="hidden" value={this.state.requestId} />
                            <input type="submit" defaultValue="Verify PIN" />
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
export default ForgotPassword;