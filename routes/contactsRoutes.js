import express from "express";
import { addContactContaroller, getContactsController } from "../controller/contacts.js";


//router object
const router = express.Router();

router.get("/",getContactsController);
router.post("/add-contact",addContactContaroller);

export default router;