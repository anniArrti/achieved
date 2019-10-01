import React, { Component } from 'react';
import Layout from './../Layout/Layout';
import axios from 'axios'; 
import Footer from './../Layout/Footer';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  email: '',
  password:'',
  error:'',
  };
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePasswordChange = this.handlePasswordChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
 }
 handleEmailChange(e) {
   this.setState({email: e.target.value});
}
handlePasswordChange(e) {
   this.setState({password: e.target.value});
}
 handleSubmit(event) {
 	event.preventDefault();
  const user = {
      email: this.state.email,
      password: this.state.password
    };
    //var that =this;
  axios.post('http://localhost:8000/api/login', { user })
  .then(res => {
    console.log(res.data);
    if(res.data.data !== 'Matching')
    {
      this.setState({error: res.data.data});
       setTimeout(() => {
        this.setState({error: ''});
      }, 5000); 
    }else{
    this.props.history.push('/dashboard');
  }
  })
}
handleChange(){
	console.log("Done");
}
render() {
  const { error } = this.state;
    return (
      <div>
      	<Layout />
      	<div className="row padding-section">
      		<div className="col-md-2"></div> 
      	<div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container col-sm-12 col-md-offset-2 col-md-8 animated fadeInUp visiblty">
        <div className="vc_column-inner ">
          <div className="wpb_wrapper">
           <div className="vc_row wpb_row vc_inner vc_row-fluid">
              <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container vc_col-sm-12 animated fadeInUp registervisible">
                 <div className="vc_column-inner ">
                    <div className="wpb_wrapper">
                       <div className="section-head text-center">
                          <h2 className="section-title">
                             LOGIN                  
                          </h2>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="vc_row wpb_row vc_inner vc_row-fluid">
           <div className="wpb_text_column wpb_content_element  vc_custom_1520932193361 text-center">
              <div className="wpb_wrapper">
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
           </div>
            <div role="form" className="wpcf7" id="wpcf7-f301-p476-o1" lang="en-US" dir="ltr">
              <div className="screen-reader-response"></div>
              <form onSubmit={this.handleSubmit} className="wpcf7-form" noValidate="noValidate">
                <div className="comment-form text-center">
                <div className="form-results"></div>
                <div className="input-field input-focused">
                <span className="wpcf7-form-control-wrap your-name">
                	<input type="text" name="email" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-line" value={this.state.email} onChange={this.handleEmailChange} />
                	</span>
                	<label className="input-title">User Name / Email Address</label>
                </div>
                <div className="input-field input-focused">
                  <span className="wpcf7-form-control-wrap your-email">
                  	<input type="password" name="password" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email input-line" value={this.state.password} onChange={this.handlePasswordChange} />
                  </span><label className="input-title">Password</label>
                </div>
                <div className="input-field rem-a">
                  <div className="remember-me">
                  <label className="c-rem">Remember me
                  <input type="checkbox" checked="checked" onChange={this.handleChange} />
                  <span className="checkmark"></span>
                  </label>
                  </div>
                  <a href="/forgotpassword">Forget Your Password</a>
                </div>
                <div className="input-field">
                <input type="Submit" className="btn" defaultValue="Login" />
                </div>
                <p className="error">{ error }</p>
                <div className="create-accout">
                <p>Not registered? <a href="/register">Create an account</a></p>
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
      <Footer />
      </div>
    );
  }
}
export default Login;