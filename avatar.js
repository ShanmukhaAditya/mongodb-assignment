//Performing crud operations
var mongoose=require('mongoose');//to import mongoose
mongoose.connect('mongodb://localhost/dbname');//to connect with mongodb through mongoose
console.log('connected');
let userSchema = mongoose.Schema({
    name:String,
    age:Number,
    state:String,
    country:String});
 var User= mongoose.model('User',userSchema);//to compile our schema into a model
//inserting in database using create
User.create({
  name:"Aang",
  age:14,
  state:"South Air temple",
  country:"Air Temple"
},function(err,user){
  if(err){
    console.log(err);
  }
  else{
    console.log(user);
    console.log(" is added");
  }
});

let newUser1=new User({
  name:"Katara",
  age:15,
  state:"South water tribe",
  country:"Water tribes"
});
let newUser2=new User({
    name:"Zuko",
    age:16,
    state:"Fire nation",
    country:"Fire nation"
});
let newUser3=new User({
    name:"Azula",
    age:15,
    state:"Fire nation",
    country:"Fire nation"
});
//using insert many to insert
User.insertMany([newUser1,newUser2],function(err,user){
    if(err){
     console.log(err);
    }
    else{
      console.log(user);
      console.log(" is added");
    }
});
//using save function to insert
newUser3.save(function(err,user){
  if(err){
    console.log(err);
  }
  else{
    console.log(user);
    console.log("is added");
  }
});
//using find function to get all data
User.find({},function(err,allUsers){
  if(err){
    console.log(err);
  }
  else{
    console.log(allUsers);
  }
});
//finding using some information only
User.find({name:"Aang"},function(err,user){
  if(err){
    console.log(err);
  }
  else{
    console.log(user);
  }
});
//using find function in second way
User.find({})
 .then((data)=>{
    console.log(data);
  })
 .catch((err)=>{
   console.log(err);
 })
//using remove function
if (mongoose.Types.ObjectId.isValid('5ec692fef7ac9f5048aad804')){
    User.remove({ _id: '5ec692fef7ac9f5048aad804'},function (err,data) {
        if(err){
            console.log(err);
        }
        else{
            if(data){
                console.log("removed ");
                console.log(data);
            }
            else{
                console.log("no user found");
            }
        }
    });
}
else{
    console.log("enter a valid id");
}
//updating data
User.update({name:"Aang"},{$set:{name:"Aang",age:20}},function (err,user) {
    if(err){
        console.log(err);
    }
    else{
        console.log("updated: ");
        console.log(data);
    }
});
//using find one function
if(mongoose.Types.ObjectId.isValid('5ec4e2b6f525a7f0fbc67909')){
    User.findOne({_id:'5ec4e2b6f525a7f0fbc67909'},function (err,user) {
        if(err){
            console.log(err);
        }
        else{
            if(user){
                console.log(user);
            }
            else{
                console.log("no data found !");
            }
        }
    });
}
}
else{
    console.log("provide correct user id");
}
//using find one and update function
if(mongoose.Types.ObjectId.isValid('5ec4e2b6f525a7f0fbc67909')){
    User.findOneAndUpdate({_id:'5ec4e2b6f525a7f0fbc67909'},{$set:{name:"appa"}}, function (err,user) {
        if(err){
            console.log(err);
        }
        else{
            if(user){
                console.log("updated: ");
                console.log(data);
            }
            else{
                console.log("no data found !");
            }
        }
    });}
else{
  console.log("provide correct user id");
}//similarly we can do find one and removed
//find by id
if(mongoose.Types.ObjectId.isValid('5ec692fef7ac9f5048aad804')){
    User.findById('5ec692fef7ac9f5048aad804',function (err,user) {
        if(err){
            console.log(err);
        }
        else{
            if(user){
                console.log(user);
            }
            else{
                console.log("no data found !");
            }
        }
    });
}
else{
    console.log("not correct id");
}
//similarly we can find by id and update
