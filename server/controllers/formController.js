import Form from "../models/formModel.js";

const createForm = async (req, res) => {
    // const { title, description, organizer, venue, startDate, endDate, slot, pricing, capacity } = req.body;

    // try {
    //     const form = new Form({ title, description, organizer, venue, startDate, endDate, slot, pricing, capacity });
    //     await form.save();

    //     res.status(201).json({ success: true, message: "Form created successfully" });
    // } catch (error) {
    //     res.status(500).json({ success: false, message: "Error in creating form" });
    // }

    console.log(req.body); // Log the incoming data
    try {
        const form = new Form(req.body);
        await form.save();
        res.status(201).json({ success: true, message: "Form created successfully" });
    } catch (error) {
        console.error(error); // Log any errors
        res.status(500).json({ success: false, message: "Error in creating form" });
    }
}

const getForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json({ success: true, forms });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error in getting forms" });
    }
}

const getFormById = async (req, res) => {
    const id = req.params.id;

    try {
        const form = await Form.findById(id);
        res.status(200).json({ success: true, form });
    }

    catch (error) {
        res.status(500).json({ success: false, message: "Error in getting form by id" });
    }
}

const updateForm = async (req, res) => {
    const id = req.params.id;
    const { title, description, organizer, venue, startDate, endDate, slot, pricing, capacity } = req.body;

    try {
        const form = await Form.findById(id);
        form.title = title;
        form.description = description;
        form.organizer = organizer;
        form.venue = venue;
        form.startDate = startDate;
        form.endDate = endDate;
        form.slot = slot;
        form.pricing = pricing;
        form.capacity = capacity;

        await form.save();
        res.status(200).json({ success: true, message: "Form updated successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error in updating form" });
    }
}

const deleteForm = async (req, res) => {
    const id = req.params.id;

    try {
        await Form.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Form deleted successfully" });
    }
    
    catch (error) {
        res.status(500).json({ success: false, message: "Error in deleting form" });
    }

}


export default { createForm, getForms, getFormById, updateForm, deleteForm };