import express from "express"; 
import axios from "axios"; 
import bodyParser from "body-parser";

const app = express();
const port = 3000; 

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    let currentDate = new Date(); 
    let isoDate = currentDate.toISOString(); 
    const token = process.env.token; // substitute with your own API token from OpenUV
    const result = await axios.get(`https://api.openuv.io/api/v1/uv?lat=-37.895978&lng=144.649419&alt=100&dt=${isoDate}`, {
        headers: {
            "x-access-token": token 
        }
    })

    res.render("index.ejs", { content: result.data } ); 
})

app.listen(port, (req, res) => {
    console.log(`Listening to port ${port}`); 
})