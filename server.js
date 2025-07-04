const express = require("express");
require('dotenv/config');
const paymentRoutes = require('./routes/paymentRoutes');

const PORT = process.env.PORT || 30001;
const app = express();

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send("Mpesa STK push");
});

app.use("/api/payments", paymentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});