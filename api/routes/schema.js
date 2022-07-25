const express = require('express');
const router = express.Router();
const User = require('../model/schema');
const mongoose = require('mongoose');

router.get('/',(req,res,next)=>{
    User.find()
    .then(result => {
        res.status(200).json({
            user: result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is faculty psot request'
    });
});

module.exports = router;