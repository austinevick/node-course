const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");

const getAllBootcamps = async(req,res,next)=>{
try {
   
    const bootcamp = await Bootcamp.find(req.query);
    res.status(200).json({success: true,count: bootcamp.length, data: bootcamp})
} catch (err) {
    res.status(400).json({
        success: false,message: err});
}
}

const getBootcamp = async(req,res,next)=>{
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(!bootcamp){
         return  res.status(400).json({success: false});   
        }
        res.status(200).json({success: true,data: bootcamp})
    } catch (err) {
        res.status(400).json({
            success: false,
            message: `bootcamp with id ${req.params.id} not found`,
            data: null});
    }
}


const createBootcamp =async (req,res,next)=>{
    try {
        const bootcamp =await Bootcamp.create(req.body);
        res.status(201).json({
         success: true,
         data: bootcamp});   
    } catch (err) {
        res.status(400).json({
            success: false,message: err}); 
            console.log(err); 
    }
}

const updateBootcamp =async (req,res,next)=>{
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id,req.body,
         {new: true,runValidators:true});
         if(!bootcamp){
             res.status(400).json({success: false});  
         }
         res.status(200).json({
             success: true,
             data: bootcamp});           
    } catch (err) {
        res.status(400).json({
            success: false,message: err});
    }
}

const deleteBootcamp = async(req,res,next)=>{
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
         if(!bootcamp){
             res.status(400).json({success: false});  
         }
         res.status(200).json({
             success: true,
             data: {}});           
    } catch (err) {
        res.status(400).json({
            success: false,message: err});
    }
    
}


 module.exports= {
    getBootcamp,
    getBootcamps: getAllBootcamps,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
 }

