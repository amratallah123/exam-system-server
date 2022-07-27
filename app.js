const tasks = require("./routes/tasks");
const express = require("express");
const app = express();
app.use(express.json());
app.use("/api", tasks);
const port = 3000;

app.listen(port, () => console.log(`Listening on Port ${port}...`));
