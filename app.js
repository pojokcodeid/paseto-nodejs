import "dotenv/config";
import jsonServer from "json-server";
import { createToken, verfy } from "./createToken.js";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  const user = router.db.get("users").find({ username, password }).value();
  if (user) {
    // load data dari db misalkan
    const payload = {
      user_id: "00001",
      name: "Pojok Code",
      age: 20,
    };
    const accessToken = await createToken(payload);
    res.status(200).json({ accessToken });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

server.post("/auth/verify", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const decoded = await verfy(token);
    res.status(200).json({ message: "Verified Success", data: decoded });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
