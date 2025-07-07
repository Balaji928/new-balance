const express = require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const cors = require ('cors');

const app = express();
const port = 6005;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the MERN CRUD API")
})

const users = [];

const secretkey = 'your-secret-key';

app.post('/register', async (req,res) =>{
  const {username,password} = req.body;
  console.log("hi".username)
  const hasedPassword = await bcrypt.hash(password,10);
  users.push({username,password : hasedPassword});
  res.sendStatus(201);
  console.log("User Registered Successfully")
})

app.post('/login' , async(req,res) => {
  const {username,password} = req.body;
  const user =users.find((us) => us.username === username)
  console.log("hi".username)

  if(user){
    const isValiduser = await bcrypt.compare(password,user.password,);

    if(isValiduser){
      const token = await jwt.sign({username},secretkey,{expiresIn : '1hr'})
      res.json({token});
      console.log("login successfully");
    }
    else{
      res.status(401).json({message : 'Invalid Credential,since Password Does not match'})
    }
  }
  else{
    res.status(401).json({message : 'Invalid Credential,since User Not Found,SignUp to Login plz'})
  }
})

const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://balajishanmugam018:balaji2124@cluster0.2njpbvm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const burgers=client.db("newbalance").collection("tshirts");

    app.post("/upload",async(req,res)=>{
      const data=req.body;
      const result=await burgers.insertOne(data);
      res.send(result);
    })

    app.get("/sns",async(req,res)=>{
      const foods=burgers.find();
      const result=await foods.toArray();
      res.send(result);
    })

    app.get("/snsbyid/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await burgers.findOne(filter);
      res.send(result);
    })

    app.patch("/allproductsnacks/:id",async(req,res)=>{

      const id=req.params.id;
      console.log(id)
      const updateFooddata=req.body;
      const filter={_id:new ObjectId(id)};

      const updateDoc={
        $set:{
          ...updateFooddata
        },
      }

      const options ={upsert:true};
      const result=await burgers.updateOne(filter,updateDoc,options);
      res.send(result);
    })

    app.delete('/deletesnack/:id',async(req,res)=>{
      const id=req.params.id;
      console.log(id)
      const filter={_id:new ObjectId(id)};
      const result=await burgers.deleteOne(filter);
      res.status(200).json({success:true , message:"data deleted successfully", result});
    })

    const bag=client.db("newbalance").collection("bags");

    app.post("/uploadbags",async(req,res)=>{
      const data=req.body;
      const result=await bag.insertOne(data);
      res.send(result);
    })

    app.get("/snsbags",async(req,res)=>{
      const foods=bag.find();
      const result=await foods.toArray();
      res.send(result);
    })

    app.get("/snsbybags/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await bag.findOne(filter);
      res.send(result);
    })

    app.patch("/allproductbags/:id",async(req,res)=>{

      const id=req.params.id;
      const updateFooddata=req.body;
      const filter={_id:new ObjectId(id)};

      const updateDoc={
        $set:{
          ...updateFooddata
        },
      }

      const options ={upsert:true};
      const result=await bag.updateOne(filter,updateDoc,options);
      res.send(result);
    })

    app.delete('/deletebags/:id',async(req,res)=>{
      const id=req.params.id;
      console.log(id)
      const filter={_id:new ObjectId(id)};
      const result=await bag.deleteOne(filter);
      res.status(200).json({success:true , message:"data deleted successfully", result});
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,() => {
  console.log(`connected to ${port}`)
})