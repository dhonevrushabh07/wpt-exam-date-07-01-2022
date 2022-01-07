const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const { addUser } = require("./user");
app.use(cors());

//http://localhost:4000/add-user
app.post("/add-user", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "user added successfully" });
});

app.listen(4000, () => console.log("Server Started !!"));
