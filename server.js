const express = require("express");
const app = express();

// Allow backend to read JSON
app.use(express.json());

// STEP 1 — Tasks array (Temporary Database)
let tasks = [
    { id: 1, title: "Learn HTML" },
    { id: 2, title: "Learn CSS" },
    { id: 3, title: "Learn JS" }
];

// Home Route
app.get("/", (req, res) => {
    res.send("Mayuresh Backend is working!");
});

// Route to get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Start the server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
