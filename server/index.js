import express from "express";
import orders from "./orders.js";
const app = express();
const PORT = 5000;
const APP_URL = "http://localhost:5173";

app.use((_, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", APP_URL);
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get("/orders/:orderId", (req, res) => {
    const { orderId } = req.params;
    const { zip } = req.query;
    const order = orders.find(
        (o) => o.delivery_info.orderNo == orderId && o.zip_code == zip
    );
    res.send(order);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
