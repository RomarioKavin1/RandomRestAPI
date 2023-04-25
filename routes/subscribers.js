const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');
const subscriber = require('../models/subscriber');

module.exports = router;

router.get('/',async(req,res)=>{
    try{
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',getSubscriber,(req,res)=>{
    res.send(res.subscriber);
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
router.patch('/:id',getSubscriber,(req,res)=>{
    
});
router.delete('/:id',getSubscriber, async(req,res)=>{
    try{
        
        await res.subscriber.remove()
        res.json({ message :'Deleted'})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
});

async function getSubscriber(req,res,next){
    let subscriber
    try{
        subscriber = await Subscriber.findById(req.params.id);
        if(subscriber == null){
            return res.status(404).json({message:'Cannot find Subscriber'})

        }
    }
    catch(err){
        return res.status(500).json({message:err.message  })
    }
    res.subscriber=subscriber;
    next();
}
