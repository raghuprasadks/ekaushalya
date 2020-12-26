var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ekaushalya',{ useNewUrlParser: true });
var userSchema = mongoose.Schema({
   name: String,
   mobile: Number,
   email: String,
   password: String,
   confirmpassword: String
});
var collectionName = 'register'
var User = mongoose.model("user", userSchema,collectionName);

//post users
router.post('/userinfo', function(req, res){
  console.log('req.body', req.body);
  var userinfo = req.body; //Get the parsed information
  console.log('req.body', req.body.name);
  if(!userinfo.name || !userinfo.mobile 
     || !userinfo.email|| !userinfo.password|| !userinfo.confirmpassword){
     res.send("Sorry, you provided wrong info");
  } else {
     var newUser = new User({
        name: userinfo.name,
        mobile: userinfo.mobile,
        email: userinfo.email,
        password: userinfo.password,
        confirmpassword: userinfo.confirmpassword
     }); 

     newUser.save(function(err, User){
        if(err)
        {
           console.log("Error");
           res.send({"error":err});
        }
        else{
          console.log("success::"+User);
           res.send(User);
        }
          
     });     
}});

// view users
router.get('/users', function(req, res){
  User.find(function(err, response){
     console.log('able to get list of users');
     res.json(response);
  });
});

// delete
router.delete('/user/:id', function(req, res){
  User.findByIdAndRemove(req.params.id, 
     function(err, response){
     if(err) res.json(
        {message: "Error in deleting user " 
        + req.params.id});
     else res.json(
        {message: "Person with id " 
        + req.params.id + " removed."});
  });
});

//update
const opts = { new: true, upsert: true };
//await Test.findOneAndUpdate(cond, update, opts);
router.put('/user/:id', function(req, res){
   console.log('inside update '+req.params.id);
   User.findByIdAndUpdate(req.params.id, req.body,opts,
      function(err, response){
      if(err) res.json(
         {message: "Error in updating person with id " 
         + req.params.id});
      res.json(response);
   });
});

/**
function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      // Return if password is wrong
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      // If credentials are correct, return the user object
      return done(null, user);
    });
  }
**/

//post users
router.post('/login', function(req, res){
  console.log('req.body.email', req.body.email);
  console.log('req.body.password', req.body.password);

  User.findOne({ email:req.body.email,password:req.body.password}, function (err, user) {
      console.log('where iam i');
      if (err) { 
        console.log('login failed');
        //return done(err);
        res.send({"error":err}); 
      }
      // Return if user not found in database
      if (user) {
        console.log("login success",user);
        res.send(user);
      //return done(null, user);
      } else{
        console.log('other state');

        res.send({"user":""});
      }
    });
});
  

module.exports = router;