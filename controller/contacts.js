import contactsModel from "../models/contactsModel.js";

export const getContactsController = async (req,res) => {
    try {
        const contacts = await contactsModel.find({});
        res.status(200).send({
            success: true,
            counTotal: contacts.length,
            message: 'Contacts',
            contacts,
        })
        
    } catch (error) { 
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting contacts",
            error: error.message,
        });
    }
};

export const addContactContaroller = async (req,res) => {
    try {
        const {name, rating, about, projects, experience, price, contacts} = req.body;
        const contact = new contactsModel(req.body);
        await contact.save();

        res.status(201).send({
            success: true,
            message: "Contact Created Successfully",
            contact,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in crearing contact",
        });

    }
};