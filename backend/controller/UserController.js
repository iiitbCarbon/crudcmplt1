
 import UserModels from "../models/User.js"

const Createuser = async(req,res)=>{
try {
    
const {name,fathername,email,phone} = req.body
const NewUser = new UserModels({
    name , fathername , email , phone
})
await NewUser.save() 
res.status(200).json({success:true , Message:'User Created Successfully', NewUser})
} catch (error) {
    console.log(error)
    res.status(500).json({success:false , Message:'error', NewUser})
}
}

const Getuser = async(req,res)=>{
    try {
        const user = await UserModels.find()

        if(!user){
            return res.status(404).json({success:false , message:'user not found'})
        }
        res.status(200).json({success:true , user})
    } catch (error) {
        console.log(error)
        return res.status(404).json({success:false , message:'internal error'})
    }
}

const UpdateUser = async(req,res)=>{
 try {
   const UserId = req.params.id
    const updateduser = await UserModels.findByIdAndUpdate(UserId , req.body , {new:true})
    if(!updateduser){
        return res.status(404).json({success:false , message :'user not found'})
    }
    res.status(200).json({success:true , message:'User updated successfully'})
 } catch (error) {
    console.log('error')
    return res.status(404).json({success:false , message:'internal error'})
 }
}

const  DeleteUser = async (req,res)=>{
    try {
        const userid = req.params.id
        const deluser = await UserModels.findByIdAndDelete(userid)
        if(!deluser){
            return res.status(404).json({success : false , message : "user not found" })

        }
        return res.status(200).json({success:true , message:"user deleted successfully" })
    } catch (error) {
        console.log('error')
        return res.status(404).json({success:false , message:'internal error'})
    }
} 

const getOne = async(req,res)=>{
    try {
       const id = req.params.id  
       const user = await UserModels.findById(id) 
       if(!user){
        return res.status(404).json({message : "user not found"})
       }
       return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error : error})
    }
}

export {Createuser , Getuser , UpdateUser , DeleteUser , getOne}