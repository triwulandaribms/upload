import express from "express";
import { readFile } from "node:fs/promises";
// import { writeFile } from "node:fs/promises";
// import { appendFile } from "node:fs/promises";

const app = express();

app.use(express.json());

app.get("/api/lihat", async (req, res) => {
  const data = await readFile("./skripsi.txt", "UTF8");
  res.send(data);
});

app.listen(3000, () => console.log("berhasil dijalankan"));
