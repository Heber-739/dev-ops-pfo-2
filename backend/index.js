import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "*"
}));


app.get("/usuarios", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM usuarios");
  res.json(rows ?? []);
});

app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});
