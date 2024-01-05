import express from 'express';
import db from "../db/connection.mjs";
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get("/",async(req,res)=>{
    let collection = await db.collection(("jobListings"));
    let result = await collection.find({}).toArray();
    res.send(result).status(200);
})

router.get("/:id",async(req,res)=>{
    let collection = await db.collection("jobListings");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if(!result)res.send("No document matches the provided id").status(404);
    else res.send(result).status(200);
})

router.post("/",async(req,res)=>{
    let newDocument={
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        salary: req.body.salary,
        description: req.body.description,
        date: new Date(),
        email: req.body.email,
        
    }
    let collection = await db.collection(("jobListings"));
    let result = await collection.insertOne(newDocument);
    res.send(result).status(200);
})

router.patch("/:id",async(req,res)=>{
    let collection = await db.collection("jobListings");
    let query = {_id: new ObjectId(req.params.id)};
    const updates = {
        $set:{
            title:req.body.title,
            company:req.body.company,
            location:req.body.location,
            salary:req.body.salary,
            description:req.body.description,
            email:req.body.email,
            date:new Date()
        }
    }
    let result = await collection.updateOne(query,updates);

if (!result) res.send("No document matches the provided id").status(404);
    res.send(result).status(200);
})


router.delete("/:id",async(req,res)=>{
    const query = {_id: new ObjectId(req.params.id)}
    let collection = await db.collection(("jobListings"));
    let result = await collection.deleteOne(query);
    res.send(result).status(200);
})

export default router;