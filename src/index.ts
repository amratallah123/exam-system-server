import tasksRouter from "./routes/tasks";

const express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api", tasksRouter);
const port = process.env.PORT || 1000;

app.listen(port, () => console.log(`Listening on Port ${port}...`));
