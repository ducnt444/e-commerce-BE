require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require("./db");

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/v1/products", async (req, res) => {
  const query = await db.query("SELECT * FROM products");
  console.log(query);
  res.status(200).json({
    data: query.rows,
  });
});

app.get("/api/v1/products/:id", (req, res) => {
  res.status(200).json({
    test: "ok",
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
