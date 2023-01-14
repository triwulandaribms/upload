import express from "express";
import { readFile } from "node:fs/promises";
import { writeFile } from "node:fs/promises";
import { appendFile } from "node:fs/promises";

const app = express();

app.use(express.json());

app.get("/api/lihat", async (_req, res) => {
  const data = await readFile("./skripsi.txt", "UTF8");
  res.send(data);
});

app.post("/api/tulis", async (req, res) => {
  await writeFile("./skripsi.txt", req.body.data, "UTF8");
  res.send(`berhasil menulis file`);
});

app.post("/api/tambah", async (req, res) => {
  await appendFile("./skripsi.txt", req.body.data, "UTF8");
  res.send(`berhasil menambah file`);
});

app.listen(3000, () => console.log("berhasil dijalankan"));
