const express = require('express');
const path = require('path');
const http = require('http');   
const app = express();
var bodyParser = require('body-parser'); 
var mongoose = require("mongoose");
//**
const Web3 = require('web3');
var Eth = require('web3-eth');
// "Eth.providers.givenProvider" will be set if in an Ethereum supported browser.
//var eth = new Eth(Eth.givenProvider || 'https://mainnet.infura.io/v3/cf23197dd7954528a7b3adb180dd9995');
var eth = new Eth(Eth.givenProvider || 'http://127.0.0.1:7545');
//const rpcURL = "https://mainnet.infura.io/v3/cf23197dd7954528a7b3adb180dd9995";
const rpcURL = 'http://127.0.0.1:7545';
const web3 = new Web3(rpcURL);

const address = "0x9D8EA1C947e2f64E84791691D30467664A092112";
const abi = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_releaseTime","type":"uint256"}],"name":"mintTimelocked","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
var Tx = require("ethereumjs-tx");

const account1 = '0x9D8EA1C947e2f64E84791691D30467664A092112' // Your account address 1
const account2 = '0x419dD91CCFE08c16f8B78b3A234a4A73d49306a2' // Your account address 2

const privateKey1 = Buffer.from('71060f2d4889e1b348744178f3ea436c77e420f6eae7c918bd2a7c706871038d', 'hex')
const privateKey2 = Buffer.from('93fc93b0ee26d06ecb246f69d18d668953498e489f14d5670def17ac32213d4d', 'hex')
//***
//private key =0x7f365f7190886df350769816603ca55e5bd9439bb1e6ebc7c9941709409027c7 address 0x172950DeDa6C9a86d6233694C3F13c133730A62a
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
//if(process.env.NODE_ENV ==='production'){
  // app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
//}


const port = process.env.PORT || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log('Running'));
/*---*/

// web3.eth.getBlockNumber()
// .then(console.log);

// web3.eth.getBlock('latest')
// .then((block)=>{
//   console.log(block.number);
// });

// web3.eth.getBlockNumber().then((latest) => {
//   var length ='';
//   if(latest < 10){
//     length = latest;
//   }else{
//     length = 10;
//   }
//   for (let i = 0; i < length; i++) {
//     console.log(latest - i);
//     web3.eth.getBlock(latest - i).then((block)=>{
//   console.log(block.hash);
// });
//   }
// });
// //Gas Price 
// web3.eth.getGasPrice().then((result) => {
//   console.log(web3.utils.fromWei(result, 'ether'));
// })

// web3.eth.getBalance(address, (err, wei) => {
//   balance = web3.utils.fromWei(wei, 'ether');
//   console.log(balance);
// });
// const contract = new web3.eth.Contract(abi, address);
// console.log(contract);
// contract.methods.totalSupply().call((err, result) => { console.log(result) })
// contract.methods.name().call((err, result) => { console.log(result) })
// contract.methods.symbol().call((err, result) => { console.log(result) })
// contract.methods.balanceOf('0x3B704d7539dC28d90f54486c5405bD62F68ce0D0').call((err, result) => { console.log(result) });
//const account = web3.eth.accounts.create();
 //console.log(account);
// > {
//    address: "0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01",
//    privateKey: "0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709",
//    signTransaction: function(tx){...},
//    sign: function(data){...},
//    encrypt: function(password){...}
// }
//const address ='0xb7FC95E9184135E059B0Bc1eBD828cdEcD0d32d9';
//const web3 = new Web3('https://mainnet.infura.io/v3/cf23197dd7954528a7b3adb180dd9995');
//var web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io/v3/43dd6f73fce14a539b0bfb9cc040603e');
//console.log(web3);
//web3.setProvider(new Web3.providers.WebsocketProvider('https://mainnet.infura.io/v3/cf23197dd7954528a7b3adb180dd9995'));
 // web3.eth.getAccounts()
 // .then(console.log);
// web3.eth.getAccounts(console.log);
//wealth victory crawl book dove winter name point flip good stem motor
// web3.eth.sendTransaction({from: '0xb7FC95E9184135E059B0Bc1eBD828cdEcD0d32d9', data: '0xb7FC95E9184135E059B0Bc1eBD828cdEcD0d32d9'})
// .once('transactionHash', function(hash){  })
// .once('receipt', function(receipt){  })
// .on('confirmation', function(confNumber, receipt){  })
// .on('error', function(error){  })
// .then(function(receipt){
//     // will be fired once the receipt is mined
// });

// web3.eth.getTransactionCount(account1, (err, txCount) => {
//   // Build the transaction
//   const txObject = {
//     nonce:    web3.utils.toHex(txCount),
//     to:       account2,
//     value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
//     gasLimit: web3.utils.toHex(21000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
//   }
// console.log(txObject);
//  // Sign the transaction
//   const tx = new Tx(txObject)
//   tx.sign(privateKey1)

//   const serializedTx = tx.serialize()
//   const raw = '0x' + serializedTx.toString('hex')

//   // Broadcast the transaction
//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log('txHash:', txHash)
//     // Now go check etherscan to see the transaction!
//   })
// })
/*----*/
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
//Get blocks
app.get("/api/blocks",async function(req,res){
    web3.eth.getBlockNumber().then(async (latest) => {
      var length ='';
      if(latest < 10){
        length = latest;
      }else{
        length = 10;
      }
       var result =[];
      for (let i = 0; i < length; i++) {
        var blocks ='';
        web3.eth.getBlock(latest - i).then((block)=>{
         result.push(block)
        });
      }
      setTimeout(function(){res.send({data:result});}, 3000);
    // await res.send({data:result});
    }); 
})
app.post("/api/getransaction",async function(req,res){
  console.log(req.body.user.number);
  web3.eth.getTransactionFromBlock(req.body.user.number)
  .then((result) =>{
    res.send({data:result});
  })
});
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