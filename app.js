import express from "express";
const app = express();
import employeeRouter from './api/index.js'

//body parsing middleware --- the code won't be able to do this later if this isn't in here
app.use(express.json());

app.use((req, res, next) => {
  // console.log("REQ________", req);
  console.log(req.method, req.originalUrl);
  next();
})

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

//any info requested from the client with this route will come from index.js
app.use('/employees', employeeRouter)

//error handling middleware. has to be at the very end.
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('AN ERROR OCCURRED', err);
  next();
})

export default app;