const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy data (FASTEST approach)
const colleges = [
  {
    id: 1,
    name: "IIT Delhi",
    location: "Delhi",
    fees: 200000,
    rating: 4.5,
    courses: ["CSE", "ECE"]
  },
  {
    id: 2,
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: 150000,
    rating: 4.3,
    courses: ["CSE", "Mechanical"]
  },
  {
    id: 3,
    name: "BITS Pilani",
    location: "Rajasthan",
    fees: 300000,
    rating: 4.6,
    courses: ["CSE", "EEE"]
  }
];

// GET all colleges
app.get("/colleges", (req, res) => {
  const search = req.query.search || "";

  const filtered = colleges.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  res.json(filtered);
});

// GET single college
app.get("/college/:id", (req, res) => {
  const college = colleges.find(c => c.id == req.params.id);
  res.json(college);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});