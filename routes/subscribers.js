const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

module.exports = router;

router.get('/',async(req,res)=>{
    try{
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',(req,res)=>{
    res.send(req.params.id);
});

router.post('/',async (req,res)=>{
    const subscriber = new Subscriber({
        name:req.body.name,
        subscribedToChannel:req.body.subscribedToChannel
    });
    try{
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    }catch(err){
        res.status(400).json({message:err.message});
    }
    
});
router.patch('/:id',(req,res)=>{
    
});
router.delete('/:id',(req,res)=>{
    
});