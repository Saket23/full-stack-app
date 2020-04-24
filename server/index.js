const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const connection = require("./db");
const query = require("./helper");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

app.get("/customer", async (req, res) => {
  const results = await query(
    connection,
    "select customer_id,customer_name,age,gender from customer"
  ).catch(console.log);
  res.json({ results });
});

app.get("/customer/:id", async (req, res) => {
  const { id } = req.params;
  const results = await query(
    connection,
    `select customer_name,address from customerDetails d,customer c where c.customer_id =d.customer_id and d.customer_id=${id}`
  ).catch(console.log);
  res.json({ results });
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log("Server is running on port 5000.");
});
