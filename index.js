import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

let users = [
  {
    username: "shariq",
    age: 19,
  },
  {
    username: "arham",
    age: 18,
  },
];

// Create User
app.post("/user", (req, res) => {
  users.push(req.body);
  res.json({ message: "User created successfully!", users });
});

// Read All Users
app.get("/user", (req, res) => {
  res.json({ message: "All Users", users });
});

// Read Single User
app.get("/user/:username", (req, res) => {
  const { username } = req.params;
  let user = users.find(
    (user) => user.username?.toLowerCase() == username.toLowerCase(),
  );
  res.json({ message: "Single User", user });
});

// Delete User
app.delete("/user/:username", (req, res) => {
  const { username } = req.params;
  users = users.filter(
    (user) => user.username?.toLowerCase() !== username.toLowerCase(),
  );
  res.json({ message: "User deleted successfully!", users });
});

// Edit User
app.put("/user/:username", (req, res) => {
  const { username } = req.params;
  const index = users.findIndex(
    (user) => user.username?.toLowerCase() === username.toLowerCase(),
  );
  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }
  users[index] = {
    ...users[index],
    ...req.body,
  };
  res.json({ message: "User updated successfully!", users });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
