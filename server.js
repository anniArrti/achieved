const express = require('express');
const path = require('path');
const http = require('http');   
const app = express();
var bodyParser = require('body-parser'); 
var mongoose = require("mongoose");
//const Web3 = require('web3');

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '1491078f',
  apiSecret: 'hI7iAO8pRKllo8U0',
});

var Promise = mongoose.Promise = require('bluebird');
var md5 = require('md5');
require('dotenv').config();
const nodemailer = require('nodemailer');

var db = mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://blochchain:blochchain123@ds145916.mlab.com:45916/blochchain', { useNewUrlParser: true }); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
   
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', '*');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 }); 

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log('Running'));

var Schema = mongoose.Schema;

var usersLogin = new Schema({   
 firstname : { type: String},
 lastname : { type: String},
 email :{ type: String, required: true },
 password : { type: String}, 
 mobileNumber : { type: String}
});
var user = mongoose.model('user', usersLogin);

app.post("/api/register",function(req,res){
	req.body.user.password = md5(req.body.user.password);
 	user.find().where({"email": req.body.user.email})
        .countDocuments(function(err,count, data){  
		if(err){  
		 res.send(err);                
		}  
      	else{    
	        if(count == "1")
	        {
	          res.send({data:"The email address you have entered is already registered"}); 
	        }   
	        else{
	          var mod = new user(req.body.user); 
	          mod.save(function(err,data){  
	            if(err){  
	               res.send(err);                
	            }  
	            else{        
	                res.send({data:"Record has been Inserted"});  
	            }  
	          }); 
	        }  
      	} 
 	}); 
})

app.post("/api/login",function(req,res){ 
	req.body.user.password = md5(req.body.user.password);
    user.find().where({"email": req.body.user.email,"password": req.body.user.password})
          .countDocuments(function(err,count, data){  
		if(err){  
		 res.send(err);                
		}  
		else{    
			if(count == "1")
			{
			  res.send({data:"Matching"}); 
			}   
			else{
			  res.send({data:"Invalide Username Or Password"}); 
			}  
		} 
 	});
})
app.post("/api/forgotpassword",function(req,res){
	let number = req.body.user.email;
	console.log(number);
	nexmo.verify.request({
	  number: number,
	  brand: 'Nexmo',
	  code_length: '4'
	}, (err, result) => {
	  console.log(err ? err : result)
	  res.send({data:result});
	});
			// nexmo.verify.request({number: phoneNumber, brand: 'Awesome Company'}, (err, 
			// result) => {
		 //    if(err) {
		 //      res.sendStatus(500);
		 //    } else {
		 //      let requestId = result.request_id;
		 //      if(result.status == '0') {
		 //        res.render('verify', {requestId: requestId}); // Success! Now, have your user enter the PIN
		 //      } else {
		 //        res.status(401).send(result.error_text);
		 //      }
		 //    }
			// });
  	// user.find().where({"email": req.body.user.email})
   //      .countDocuments(function(err,count, data){  
   //    if(err){  
   //       res.send(err);                
   //    }  
   //    else{    
   //      if(count == "1")
   //      {
        	
            // let transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     secure: false,
            //     port: 25,
            //     auth: {
            //       user: 'anniat44@gmail.com',
            //       pass: 'annyattri@#1'
            //     },
            //     tls: {
            //       rejectUnauthorized: false
            //     }
            // });

            // let mailOptions = {
            //     from: '"Admin"', // sender address
            //     to: req.body.user.email, // list of receivers to: 'bar@example.com, baz@example.com',
            //     subject: 'Reset password instructions', // Subject line
            //     text: 'Node js App', // plain text body
            //     html: '<div class="row" style="color: #3f3f44; font-size:16px; font-family: Helvetica,Arial,sans-serif; font-weight: 400;line-height: 1.5"><div class="col-md-3" style="border:1px solid #ccc; background: #f5f5f5; padding:20px; width:60%; margin-top:10px; box-shadow: 1px 1px 0px 2px #e6e6e6; border-radius: 5px;"><h2 style="color: #080808; margin-bottom: 10px;"> Hello ' +req.body.email+' </h2><hr style="margin-bottom: 25px !important;"><p>Someone has requested a link to change your password. You can do this through the link below.</p><div class="inln" style="margin-top: 2rem;"><a class="pdngs" style="color:#fff; font-weight: bold; border: 1px solid; padding: 10px 20px 10px 20px; text-decoration: none; background: #00d9de;" href="http://localhost:4200/resetpassword?email='+req.body.email+'">Change My Password</a></span><p>If you didn`t request this, please ignore this email.</p><p>Your password won`t change until you access the link above and create a new one.</p><p style="margin-top: 50px; ">Best Regards,<br> Anny Team</p></div></div></div>'
            // };
            // transporter.sendMail(mailOptions, (error, info) => {
            //     if (error) {
            //         return console.log(error);
            //     }
            //     res.send({data:"Send Email"});
            // });
       /* }   
        else{
          res.send({data:"The email address you have entered is not registered"}); 
        }  
      } */
 	//}); 
}) 
app.post("/api/verifypin",function(req,res){
	let pin = req.body.user.pin;
  let requestId = req.body.user.requestId;
 // let requestId ='ffd5c37f6e2247bd9d97e6c8b80fea47'
 console.log(pin);
  nexmo.verify.check({request_id: requestId, code: pin}, (err, result) => {
    if(err) {
    	console.log(err);
      // handle the error
    } else {
      if(result && result.status == '0') { // Success!
        res.status(200).send('Account verified!');
        res.render('status', {message: 'Account verified! ?'});
      } else {
        // handle the error - e.g. wrong PIN
      }
    }
  });
})