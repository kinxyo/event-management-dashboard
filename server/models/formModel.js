import mongoose from "mongoose";    

const formSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    organizer: {
        type: String,
        required: true,
        trim: true,
    },
    venue: {
        type: String,
        required: true,
        trim: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    slot: {
        type: Number,
        required: true,
    },
    pricing: {
        type: Number,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
});

const Form = mongoose.model("Form", formSchema);
export default Form;