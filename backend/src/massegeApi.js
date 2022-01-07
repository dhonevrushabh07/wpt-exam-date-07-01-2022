const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");

const { addUser, selectAllUser } = require("./massege");
app.use(cors());

//https://localhost/msg
app.get("/user", async (req, res) => {
  const list = await selectAllUser();
  res.json(list);
});

//http://localhost:5000/add-msg
app.post("/add-user", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "user added successfully" });
});

app.listen(5000, () => console.log("Server Started !!"));
