const express = require("express");
const cors = require('cors')
const rootRouter = require('./routes/index.router.js')
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    throw err;
});

app.use(cors());
app.use(express.json());
app.use('/api/v1', rootRouter);

app.listen(3000, () => {
    console.log("server is running at port", 3000);
})