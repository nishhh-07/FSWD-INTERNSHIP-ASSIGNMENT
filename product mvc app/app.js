const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use(logger);

app.use("/products", productRoutes);

app.use(errorHandler);

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});