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