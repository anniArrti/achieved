import React, { Component } from 'react';
//import Layout from './../Layout/Layout';
import Footer from './../Layout/Footer';
import $ from "jquery";
class Landing extends Component {
constructor(props){
  super(props);
  this.state={
  email:'',
  name:'',
  message: '',
  mailchimpemail:'',
  setposition: false,
  }
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlenameChange = this.handlenameChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handlemessageChange = this.handlemessageChange.bind(this);
  this.handleMailchimpEmail = this.handleMailchimpEmail.bind(this);
  this.handlemailchimpSubmit = this.handlemailchimpSubmit.bind(this);
  this.handleScroll = this.handleScroll.bind(this);
 }

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll(event) {
   if(window.scrollY > 50){
     this.setState({
        setposition: true
      })
  }else{
    this.setState({
        setposition: false
      })
  }
}

handleEmailChange(e) {
   this.setState({email: e.target.value});
}
handlenameChange(e) {
   this.setState({name: e.target.value});
}
handlemessageChange(e) {
   this.setState({message: e.target.value});
}
handleMailchimpEmail(e) {
   this.setState({email: e.target.value});
}
handleSubmit(event) {

}
handlemailchimpSubmit(e){

}
componentDidMount() {
window.addEventListener('scroll', this.handleScroll);
  var $inputline=$('.input-line');
  if($inputline.length>0){ 
    $inputline.each(function(){ 
      var $this=$(this);
      var $thisval=$(this).val();
      if($thisval.length>0){
         $this.parents('.input-field').addClass('input-focused');
      }
    })
  }
(function() {
if (!window.mc4wp) {
   window.mc4wp = {
      listeners: [],
      forms    : {
         on: function (event, callback) {
            window.mc4wp.listeners.push({
               event   : event,
               callback: callback
            });
         }
      }
   }
}
})();
}
render() {
const { setposition } =this.state;
    return (
      <div className="landing_div">
       <header className={"site-header is-sticky " +(setposition? 'has-fixed': '')}>
            <div className="navbar navbar-expand-lg is-transparent" id="mainnav">
               <nav className="container">
                  <h1 className="navbar-brand">
                     <a href="/">
                     <img className="logo" src="/images/site-logo.png" alt="site-logo" />
                     <img className="logo-2" src="/images/site-logo.png" alt="site-logo" />
                     </a>
                  </h1>
                  <button className="navbar-toggler" type="button">
                  <span className="navbar-toggler-icon">
                  <span className="ti ti-align-justify"></span>
                  </span>
                  </button>
                  <div className="navbar-collapse justify-content-end">
                     <ul id="menu-onepage-menu" className="navbar-nav">
                        <li className="active"><a href="/#login" className="nav-link">Login\MyFunds</a></li>
                        <li><a href="/#about" className="nav-link">What Is Achieved</a></li>
                        <li><a href="/#roadmap" className="nav-link">Browse Roadmaps</a></li>
                        <li><a href="/#contact" className="nav-link">contact startups</a></li>
                       
                     </ul>
                     <ul className="navbar-nav navbar-btns">
                       
                       <li className="nav-item"><a className="nav-link btn btn-sm btn-outline menu-link" href="/login">Login</a></li>
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
        <section id="login" className="row wpb_row vc_row-fluid mobile-center banner-particle banner-curb banner-full vc_row-o-equal-height vc_row-o-content-middle vc_row-flex banner d-flex align-items-center">
            <div id="particles-js" className="particles-container particles-js">
            <canvas className="particles-js-canvas-el" width="1349" height="413"></canvas>
            </div>
            <div className="container">
               <div className="banner-content">
                  <div className="row">
                     <div data-animate="fadeInUp" data-delay="0.65" className="order-lg-first wpb_column vc_column_container vc_col-sm-12 col-lg-6 col-md-6 animated fadeInUp landingvisible">
                        <div className="vc_column-inner ">
                           <div className="wpb_wrapper">
                              <div className="wpb_text_column wpb_content_element  vc_custom_1520825700169">
                                 <div className="wpb_wrapper">
                                    <h1 className="powerdata">Powering Data for the new equity blockchain</h1>
                                    <p className="lead color-secondary">Global decentralize network to buy &amp; sell shares</p>
                                    <ul className="btns">
                                       <li><a className="btn" href="/">Sign up to Join</a></li>
                                       <li><a className="btn btn-alt" href="/">TOKEN DISTRIBUTION</a></li>
                                    </ul>
                                 </div>
                              </div>
                              <ul className="social">
                                 <li><a href="/"><em className="fa fa-facebook"></em></a></li>
                                 <li><a href="/"><em className="fa fa-twitter"></em></a></li>
                                 <li><a href="/"><em className="fa fa-youtube-play"></em></a></li>
                                 <li><a href="/"><em className="fa fa-github"></em></a></li>
                                 <li><a href="/"><em className="fa fa-btc"></em></a></li>
                                 <li><a href="/"><em className="fa fa-medium"></em></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div data-animate="fadeInRight" data-delay=".9" className="order-first wpb_column vc_column_container col-sm-12 col-md-offset-1 col-md-5 animated fadeInRight">
                        <div className="vc_column-inner ">
                           <div className="wpb_wrapper">
                              <div className="countdown-box text-center countdown-header">
                                 <span className="extra-line"></span>        
                                 <h6>Achieved Sale Is Open. Closing In</h6>
                                 <div className="token-countdown d-flex align-content-stretch" data-date="2019/10/06"><div className="col"><span className="countdown-time">07</span><span className="countdown-text">Days</span></div><div className="col"><span className="countdown-time">13</span><span className="countdown-text">Hours</span></div><div className="col"><span className="countdown-time">01</span><span className="countdown-text">Minutes</span></div><div className="col"><span className="countdown-time countdown-time-last">28</span><span className="countdown-text">Seconds</span></div></div>
                                 <div className="token-status-bar">
                                    <div className="token-status-percent"></div>
                                    <span className="token-status-point ponit">pre-sale</span>
                                    <span className="token-status-point ponit1">soft cap</span>
                                    <span className="token-status-point ponit2">bonus</span>
                                 </div>
                                 <a className="btn btn-alt btn-sm" href="/" target="_self">Purchase TOKEN NOW</a>                
                                 <ul className="icon-list">
                                    <li><em className="fa fa-btc"></em></li>
                                    <li><em className="fa fa-krw"></em></li>
                                    <li><em className="fa fa-cc-visa"></em></li>
                                    <li><em className="fa fa-cc-mastercard"></em></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="clearfix"></div>
         </section>
         <section id="about" className="vc_row wpb_row vc_row-fluid section-pad section-bg-alt nopb about-achived">
          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="wpb_column vc_column_container col-sm-8 col-md-offset-3 col-md-6 col-sm-offset-2">
                <div className="vc_column-inner ">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element  text-center">
                      <div className="wpb_wrapper">
                        <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1520830144361">
                          <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container vc_col-sm-12 animated fadeInUp">
                           <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                 <div className="section-head text-center">
                                    <h2 className="section-title">
                                       What Is Achieved<span>Achieved</span>        
                                    </h2>
                                 </div>
                                 <div className="vc_empty_space">
                                  <span className="vc_empty_space_inner"></span></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="ct-process">
              <div className="row">
                <div className="col-md-4 text-center animated activate bounceIn undefined" data-fx="bounceIn" data-time="50">
                  <a href="/"><img className="img-circle img-responsive" src="images/research.jpg" alt="Research" /></a>
                  <div className="shadow"></div>
                       
                </div>
                <div className="col-md-4 text-center animated activate bounceIn undefined" data-fx="bounceIn" data-time="150">
                  <a href="/"><img className="img-circle img-responsive" src="images/idea.jpg" alt="Idea" /></a>
                    <div className="shadow"></div>       
                </div>
                <div className="col-md-4 text-center animated activate bounceIn undefined" data-fx="bounceIn" data-time="250">
                  <a href="/"><img className="img-circle img-responsive" src="images/solution.jpg" alt="Solution" /></a>
                  <div className="shadow"></div>
                </div>
                <div className="hidden-sm table-cell ct-process-icon">
                  <span className="ct-process-left"><i className="fa fa-trophy"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div data-animate="fadeInUp" data-delay="0.3" className="res-m-bttm-lg wpb_column vc_column_container col-sm-6 col-md-4 animated fadeInUp">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                    <h5>Info Graphics 1</h5>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-animate="fadeInUp" data-delay="0.4" className="res-m-bttm-lg wpb_column vc_column_container col-sm-6 col-md-4 animated fadeInUp visiblty">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1536822692817">
                </div>
                <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                    <h5>Info Graphics 2</h5>
                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid eos qui ratione voluptatem sequi nesciunt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container col-sm-6 vc_col-lg-offset-0 col-md-offset-0 col-md-4 col-sm-offset-3 animated fadeInUp visiblty">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper"></div>
              <div className="wpb_single_image wpb_content_element vc_align_center  vc_custom_1536822725902"></div>
                <div className="wpb_text_column wpb_content_element  text-center">
                  <div className="wpb_wrapper">
                    <h5>Info Graphics 3</h5>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris fugiat runull dolore magna.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>
        <section id="roadmap" className="wpb_row vc_row-fluid sectiosection section-pad section-bg section-light section-connect">
            <div className="container">
               <div className="row">
                  <div className="wpb_column vc_column_container col-sm-12">
                     <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                           <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1520830144361">
                              <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container vc_col-sm-12 animated fadeInUp">
                                 <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                       <div className="section-head text-center">
                                          <h2 className="section-title">
                                             OUR ROADMAP            <span>ROADMAP</span>        
                                          </h2>
                                       </div>
                                       <div className="vc_empty_space"><span className="vc_empty_space_inner"></span></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="row wpb_row vc_inner vc_row-fluid">
                              <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container col-sm-12 animated fadeInUp">
                                 <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                       <div className="row roadmap-list align-items-end">
                                          <div className="col-lg ">
                                             <div className="single-roadmap roadmap-sm roadmap-done">
                                                <h6>March 2018</h6>
                                                <p>Start of the ICO Crypto Platform Development.</p>
                                             </div>
                                          </div>
                                          <div className="col-lg width-0">
                                             <div className="single-roadmap roadmap-sm roadmap-done roadmap-down">
                                                <h6>June 2018</h6>
                                                <p>Over 100 merchants on site</p>
                                             </div>
                                          </div>
                                          <div className="col-lg ">
                                             <div className="single-roadmap roadmap-lg ">
                                                <h6>June 2018</h6>
                                                <p>Launched of mobile Apps</p>
                                             </div>
                                          </div>
                                          <div className="col-lg width-0">
                                             <div className="single-roadmap roadmap-sm  roadmap-down">
                                                <h6>August 2018</h6>
                                                <p>ICO preparation &amp; Press Tour</p>
                                             </div>
                                          </div>
                                          <div className="col-lg ">
                                             <div className="single-roadmap roadmap-sm ">
                                                <h6>October 2018</h6>
                                                <p>Start Token Sale Round (1)</p>
                                             </div>
                                          </div>
                                          <div className="col-lg width-0">
                                             <div className="single-roadmap roadmap-sm  roadmap-down">
                                                <h6>December 2018</h6>
                                                <p>Partnership for the future EcoSystem</p>
                                             </div>
                                          </div>
                                          <div className="col-lg ">
                                             <div className="single-roadmap roadmap-lg ">
                                                <h6>January 2019</h6>
                                                <p>Our team set-up and commercial preparation</p>
                                             </div>
                                          </div>
                                          <div className="col-lg width-0">
                                             <div className="single-roadmap roadmap-sm  roadmap-down">
                                                <h6>May 2019</h6>
                                                <p>Priority opening for Token holder</p>
                                             </div>
                                          </div>
                                          <div className="col-lg ">
                                             <div className="single-roadmap roadmap-sm ">
                                                <h6>June 2019</h6>
                                                <p>Start Token Sale Round (2)</p>
                                             </div>
                                          </div>
                                          <div className="col-lg width-0">
                                             <div className="single-roadmap roadmap-sm  roadmap-down">
                                                <h6>Octorber 2019</h6>
                                                <p>Blockchain usage announcement for global Network</p>
                                             </div>
                                          </div>
                                          <div className="col-lg ">
                                             <div className="single-roadmap roadmap-lg ">
                                                <h6>December 2019</h6>
                                                <p>Operational Launch United States to general</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="clearfix"></div>
         </section>
         <section className="browse-roadmap">
           <div className="container">
              <div className="serch-heading">
                 <div className="row">
                    <div className="col-md-3"></div>
                    <div className="wpb_column vc_column_container col-sm-8 col-md-offset-3 col-md-6 col-sm-offset-2">
                       <div className="vc_column-inner ">
                          <div className="wpb_wrapper">
                             <div className="wpb_text_column wpb_content_element  text-center">
                                <div className="wpb_wrapper">
                                   <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1520830144361">
                                      <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container vc_col-sm-12 animated fadeInUp">
                                         <div className="vc_column-inner ">
                                            <div className="wpb_wrapper">
                                               <div className="section-head text-center">
                                                  <h2 className="section-title">
                                                     Browse Roadmap          <span>Roadmap</span>        
                                                  </h2>
                                               </div>
                                               <div className="vc_empty_space"><span className="vc_empty_space_inner"></span>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="search-bar">
                    <button type="submit"><i className="fa fa-search"></i></button>
                    <input type="text" placeholder="Search.." name="search" />
                 </div>
                 <div className="map-list">
                    <ul>
                    <li><span><i className="fa fa-check-circle"></i></span><h6>Name 1</h6><div className="roadmap-box">
                    <span>Project 1</span>
                    <a href="/" className="features-action"><em className="ti ti-arrow-right road-arrow"></em></a>
                    </div></li>
                    <li><span><i className="fa fa-check-circle"></i></span><h6>Name 2</h6><div className="roadmap-box">
                    <span>Project 2</span>
                    <a href="/" className="features-action"><em className="ti ti-arrow-right road-arrow"></em></a>
                    </div></li>
                    <li><span><i className="fa fa-check-circle"></i></span><h6>Name 3</h6><div className="roadmap-box">
                    <span>Project 3</span>
                    <a href="/" className="features-action"><em className="ti ti-arrow-right road-arrow"></em></a>
                    </div></li>
                    <li><span><i className="fa fa-check-circle"></i></span><h6>Name 4</h6><div className="roadmap-box">
                    <span>Project 4</span>
                    <a href="/" className="features-action"><em className="ti ti-arrow-right road-arrow"></em></a>
                    </div></li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>
        <section id="contact" className="vc_rows wpb_row vc_row-fluid section section-pad section-bg section-light">
            <div className="container">
               <div className="row">
                  <div className="wpb_column vc_column_container col-sm-12">
                     <div className="vc_column-inner ">
                        <div className="wpb_wrapper">
                           <div className="vc_row wpb_row vc_inner vc_row-fluid">
                              <div data-animate="fadeInUp" data-delay="0" className="wpb_column vc_column_container col-sm-12 animated fadeInUp">
                                 <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                       <div className="section-head text-center">
                                          <h2 className="section-title">
                                             Contact Achieved CRYPTO            <span>CONTACT</span>        
                                          </h2>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="wpb_text_column wpb_content_element  vc_custom_1520932193361 text-center">
                              <div className="wpb_wrapper">
                                 <p>Any question? Reach out to us and we’ll get back to you shortly.</p>
                              </div>
                           </div>
                           <div className="vc_row wpb_row vc_inner row">
                              <div className="col-md-2"></div>
                              <div data-animate="fadeInUp" data-delay="0.5" className="wpb_column vc_column_container col-sm-12 col-md-offset-2 col-md-10 animated fadeInUp">
                                 <div className="vc_column-inner ">
                                    <div className="wpb_wrapper">
                                       <div className="wpb_text_column wpb_content_element  vc_custom_1520996880206">
                                          <div className="wpb_wrapper">
                                             <ul className="contact-info">
                                                <li><em className="fa fa-phone">phone</em>+44 0123 4567</li>
                                                <li><em className="fa fa-envelope">email</em>info@yourcompany.com</li>
                                                <li><em className="fa fa-paper-plane">tele</em>Join us on Telegram</li>
                                             </ul>
                                          </div>
                                       </div>
                                       <div role="form" onSubmit={this.handleSubmit} className="wpcf7" id="wpcf7-f301-p476-o1" lang="en-US" dir="ltr">
                                          <div className="screen-reader-response"></div>
                                          <form  className="wpcf7-form" noValidate="noValidate">
                                             <div className="comment-form text-center">
                                                <div className="form-results"></div>
                                                <div className="input-field">
                                                   <span className="wpcf7-form-control-wrap your-name">
                                                   <input type="text" name="your-name" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-line" value={this.state.name} onChange={this.handlenameChange} /></span><label className="input-title">Your Name</label>
                                                </div>
                                                <div className="input-field">
                                                   <span className="wpcf7-form-control-wrap your-email">
                                                   <input type="email" name="your-email" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email input-line" value={this.state.email} onChange={this.handleEmailChange} />
                                                   </span><label className="input-title">Your Email</label>
                                                </div>
                                                <div className="input-field">
                                                   <span className="wpcf7-form-control-wrap your-message">
                                                   <textarea name="your-message" cols="40" rows="4" className="wpcf7-form-control wpcf7-textarea input-line txtarea" aria-invalid="false" onChange={this.handlemessageChange} defaultValue={this.state.message}></textarea>
                                                   </span><label className="input-title">Your Message</label>
                                                </div>
                                                <div className="input-field">
                                                   <button type="submit" className="btn">Submit</button>
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
            </div>
            <div className="clearfix"></div>
         </section>
         <Footer />
      </div>
      );
  }
}
export default Landing;