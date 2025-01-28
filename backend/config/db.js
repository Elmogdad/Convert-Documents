import mongoose from "mongoose"

const conectDB = async() => {
    try { 
      await mongoose.connect(process.env.MONGODB_URI)
      

      console.log('Mogoose conected successfly')
     }
      catch (error) {
         console.error(error)
         }
}

export default conectDB