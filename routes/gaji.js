const express = require("express");
const { hitungGaji } = require("../controllers/gajiController");

const router = express.Router();

router.post("/hitung_gaji", hitungGaji);

module.exports = router;
