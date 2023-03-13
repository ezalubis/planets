import express from "express";
import { client } from "./db.js";
const app = express();

app.use(express.static("public"));
app.get("/api/planet",async (_req,res)=>{
  const result = await client.query("SELECT * FROM planet");
  res.send(result.rows);
});
app.listen(3000, () => {
  console.log("gassss");
});
