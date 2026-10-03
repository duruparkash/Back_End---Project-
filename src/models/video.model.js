import mongoose, { Schema } from "mongoose";


const videoSchema = new Schema({

    videoFile:{ //cloudinary url
        type: String,
        required: [true,"Video file is required"],
    },
    thumbnail:{ //cloudinary url
        type: String,
        required: [true,"Thumbnail is required"],
    },
    title:{
        type: String,
        required: [true,"Title is required"],
    },
    description:{
        type: String,
        required: [true,"Description is required"],
    },
    views:{
        type: Number,
        default: 0,
    },
    isPublished:{
        type: Boolean,
        default: true,
    },
    owner:{
        type: schema.Types.ObjectId,
        ref: "User",
        
    },

},{timestamps: true});

export const Video = mongoose.model("Video", videoSchema);