const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

// use to enable all cors requests
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8080;

// DATABASE CONNECTION & AUTH
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

// handles get request for customer order info
app.get("/", (req, res) => {
  const query = "SELECT * FROM customerorder";

  db.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.json(result);
    }
  });
});
// handles get request for customer order info
app.get("/customerorder", (req, res) => {
  const query = "SELECT * FROM customerorder";

  db.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.json(result);
    }
  });
});
// handles get request for customer newsletter
app.get("/newsletter", (req, res) => {
  const query = "SELECT * FROM newsletter";

  db.query(query, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.json({
        status: "success",
        message: "Email added successfully.",
        itemAdded: req.body,
      });
    }
  });
});

// INSERT INTO CUSTOMER ORDER TABLE
app.post("/customerorder", (req, res) => {
  let customerID = req.body.customerID;
  let FName = req.body.FName;
  let LName = req.body.LName;
  let email = req.body.email;
  let total = req.body.total;
  let date = req.body.date;
  let notes = req.body.notes;

  let sqlCustomer =
    "INSERT INTO customerorder (customerID, firstName, lastName, email, total, date, notes) VALUES (?)";
  let vals = [customerID, FName, LName, email, total, date, notes];

  db.query(sqlCustomer, [vals], (err, results) => {
    if (err) {
      throw err;
    } else {
      res.json({
        status: "success",
        message: "Customer order added successfully.",
        itemAdded: req.body,
      });
    }
  });
  console.log("Post result ran.");
});

// INSERT INTO NEWSLETTER TABLE
app.post("/newsletter", (req, res) => {
  let email = req.body.email;

  let sqlCustomer = "INSERT INTO newsletter (email) VALUES (?)";
  let vals = [email];

  db.query(sqlCustomer, [vals], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        status: "success",
        message: "Customer order added successfully.",
        itemAdded: req.body,
      });
    }
  });
  console.log("Post result ran.");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

module.exports = app;
