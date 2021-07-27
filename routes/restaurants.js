const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { csrfProtection, asyncHandler, userValidators } = require('./utils');
const db = require('../db/models');
const { loginUser } = require('../auth')

router.get("/", asyncHandler(async(req,res)=>{
const restaurants = await db.Restaurant.findAll()

res.render()
}))
module.exports=router
