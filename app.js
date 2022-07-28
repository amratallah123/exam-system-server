const tasks = require("./routes/tasks");
const express = require("express");
var app = express();
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 1, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply the rate limiting middleware to all requests
app.use(limiter);
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api", tasks);
const port = 3000;

app.listen(port, () => console.log(`Listening on Port ${port}...`));
