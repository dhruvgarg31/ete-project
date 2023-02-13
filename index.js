const express=require("express")
const bodyparser=require("body-parser")
const path=require("path")
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/cal",function(req,resp){
     resp.sendFile(path.join(__dirname,"Donate.html"))
})
app.post("/cal",function(req,resp){
    let a1=req.body.fname;
    let a2=req.body.lname;
    let a3=req.body.email;
    let a4=req.body.contact;
    let a5=req.body.address;
    let a6=req.body.city;
    let a7=req.body.state;
    let a8=req.body.zip;
    resp.send(`<table style="width: 100%">
    <tr>
       <th>First Name</th>
       <th>Last Name</th>
       <th>Email</th>
       <th>Contact</th>
       <th>Address</th>
       <th>City</th>
       <th>State</th>
       <th>Zip</th>
    </tr>
    <tr>
       <td>${a1}</td>
       <td>${a2}</td>
       <td>${a3}</td>
       <td>${a4}</td>
       <td>${a5}</td>
       <td>${a6}</td>
       <td>${a7}</td>
       <td>${a8}</td>
    </tr>
 </table>`);
   
})
app.listen(2000,function(req,resp){
    console.log("Sever run at 2000");
})