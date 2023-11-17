import express from "express";
import colors from "colors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import contactsRoutes from "./routes/contactsRoutes.js";

import cors from "cors";
import path from 'path';
import { fileURLToPath } from "url";

//configure env
dotenv.config();

//databse config
connectDB();

//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './client/build')));

// rest api
// app.use('*', function(req,res){
//     res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

//routes
app.use("/api/v1/contacts", contactsRoutes);

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on port ${PORT}`.bgCyan.white
  );
});