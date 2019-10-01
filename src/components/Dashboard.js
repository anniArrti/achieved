import React, { Component } from 'react';
import Layout from './../Layout/Layout';
import Footer from './../Layout/Footer';
//import axios from 'axios'; 
class Dashboard extends Component {
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
        <Layout />
        <p>Dashboard</p>
        <Footer />
   </div>
   );
}
}
export default Dashboard;
