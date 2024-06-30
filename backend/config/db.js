import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://akhilsachan274:akhil123@foodapp.pyisasf.mongodb.net/?retryWrites=true&w=majority&appName=foodApp/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.