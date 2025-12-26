import express from "express"; 
import axios from "axios"; 
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.static("public")); 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    let currentDate = new Date(); 
    let isoDate = currentDate.toISOString(); 
    const token = process.env.token;

    console.log('Environment variables check:');
    console.log('token exists:', !!process.env.token);
    console.log('email_init exists:', !!process.env.email_init);
    console.log('email_service_id exists:', !!process.env.email_service_id);
    console.log('email_template_id exists:', !!process.env.email_template_id);
    
    if (process.env.email_init) {
        console.log('email_init value (first 10 chars):', process.env.email_init.substring(0, 10) + '...');
    }

    const result = await axios.get(`https://api.openuv.io/api/v1/uv?lat=-37.895978&lng=144.649419&alt=100&dt=${isoDate}`, {
        headers: {
            "x-access-token": token 
        }
    })

    res.render("index.ejs", {
        content: result.data,
        emailJs: {
            publicKey: process.env.email_init || "",
            serviceId: process.env.email_service_id || "",
            templateId: process.env.email_template_id || ""
        }
    });
 
})

app.listen(port, (req, res) => {
    console.log(`Listening to port ${port}`); 
})