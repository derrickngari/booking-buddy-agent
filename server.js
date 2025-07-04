import express, { json } from "express";
import 'dotenv/config';
import paymentRoutes from './routes/paymentRoutes.js';

const PORT = process.env.PORT || 30001;
const app = express();

//middleware
app.use(json());

//routes
app.get('/', (req, res) => {
    res.send("Mpesa STK push");
});

app.use("/api/payments", paymentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});