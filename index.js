import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

const users = [];

app.post("/signup", (req, res) => {
  users.push(req.body);
  console.log("User signed up:", req.body);
  res.json({ message: "User signed up successfully!", users: users });
});

app.delete("/user", (req, res) => {
  res.json({ message: "User deleted successfully!" });
});

app.put("/user", (req, res) => {
  res.json({ message: "User updated successfully!" });
});
