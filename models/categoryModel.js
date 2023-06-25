import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const categorySchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        unique:true
    },
    slug: {
        type: String,
        lowercase: true
    }
} )

export default mongoose.model("Category", categorySchema)