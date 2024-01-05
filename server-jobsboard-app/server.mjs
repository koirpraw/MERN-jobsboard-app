import express from 'express';
import cors from 'cors';
import jobListings from "./route/jobListings.mjs";

// proividing this host name is needed for the server to run on flutter web. React web works fine with default localhost.
const host = "127.0.0.1"

const PORT = process.env.PORT || 4100;
const app = express();

// for Flutter Web

// const corsOptions = {
//     origin: ["http://localhost:8200", "http://127.0.0.1:8200", "http://localhost:3000"],
//     // methods: ['GET', 'POST'],
//    credentials:true,
//   };
// app.use(cors(corsOptions));

// for react front-end
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Your Server is up and running. This is a default route")
})

app.use("/jobListings", jobListings);
// here jobListings is a router object that we imported from route/jobListings.mjs, used to handle requests to the /jobListings path.
// The jobListings router object is created using the express.Router() method.. 
//and it defines the routes and middleware functions that are used to handle requests to the /jobListings path.
// app.listen(PORT,()=>{
//     console.log(`Server is now running on port:${PORT}`)
// })

// For Flutter Web
app.listen(PORT, host, () => {
    console.log(`Server is now running on port:${host}:${PORT} 
    go to http://${host}:${PORT}`)
})
