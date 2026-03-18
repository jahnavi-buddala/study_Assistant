const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "study_planner",
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected to MySQL ✅");
});

// Signup
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";

  db.query(sql, [email, password], (err, result) => {
    if (err) return res.send("Error");
    res.send("Signup successful ✅");
  });
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=?";

  db.query(sql, [email], (err, result) => {
    if (result.length > 0) {
      if (result[0].password === password) {
        res.send("Login successful ✅");
      } else {
        res.send("Wrong password ❌");
      }
    } else {
      res.send("User not found ❌");
    }
  });
});

// Add Task
app.post("/add-task", (req, res) => {
  const { task } = req.body;

  const sql = "INSERT INTO tasks (task) VALUES (?)";

  db.query(sql, [task], (err, result) => {
    if (err) return res.send("Error");
    res.send("Task added ✅");
  });
});

// Get Tasks
app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    if (err) return res.send("Error");
    res.send(result);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});