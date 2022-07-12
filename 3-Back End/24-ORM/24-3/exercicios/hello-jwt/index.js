const express = require("express");
const cors = require("cors");
const router = require("./src/routes/router");

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
