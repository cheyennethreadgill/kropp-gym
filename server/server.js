const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

// use to enable all cors requests
const app = express();
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8080;

// same as cors config below
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
//   next();
// });

// DATABASE CONNECTION & AUTH
const db = mysql.createConnection({
  // host: "localhost",
  // user: "root",
  // password: "Cheyenne1234",
  // database: "kropp-gym-products",
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
      return res.end(JSON.stringify(result));
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
      return res.end(
        `${JSON.stringify(result)} Customer order post server request working `
      );
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
      return res.end(
        `${JSON.stringify(result)} news post server request working`
      );
    }
  });
});

// after
// use to enable cors for a single route
// var corsOptions = {
//   origin: "*",
// };
// enable preflight cors options for client preflight request
// app.options("/customerorder", cors(corsOptions));

// INSERT INTO CUSTOMER ORDER TABLE
//    handles single rote with cors middleware
// app.post("/customerorder", cors(corsOptions), (req, res) => {
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
      res.json(results);
    }
    res.json(
      JSON.stringify({
        status: "success",
        message: "Customer order added successfully.",
        itemAdded: req.body,
      })
    );
  });
  console.log("Post result ran.");
});

// INSERT INTO NEWSLETTER TABLE
app.post("/newsletter", (req, res) => {
  let email = req.body.email;
  console.log(email);

  let sqlCustomer = "INSERT INTO newsletter (email) VALUES (?)";
  let vals = [email];

  db.query(sqlCustomer, [vals], (err, result) => {
    if (err) {
      throw err;
    } else {
      res.end(`${JSON.stringify(result)}`);
    }
    res.json(
      JSON.stringify({
        status: "success",
        message: "Customer order added successfully.",
        itemAdded: req.body,
      })
    );
  });
  console.log("Post result ran.");
});

// handle customer order delete request from client
app.delete("/customerorder/:prod", (req, res) => {
  const FName = req.params.prod;
  const sql = `DELETE FROM customerorder WHERE firstName = '${FName}'`;

  // write sql query to db requesting to delete product
  db.query(sql, FName, (err, result) => {
    if (err) {
      throw err;
    } else
      res.json({
        status: "success",
        itemDeleted: FName,
      });

    console.log("Delete request initiated...");
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

module.exports = app;
