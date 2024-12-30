const express = require("express");
const gajiRoutes = require("./routes/gaji");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", gajiRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});