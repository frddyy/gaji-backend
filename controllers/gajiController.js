const hitungGaji = (req, res) => {
  const { jam_kerja, tarif_per_jam } = req.body;

  if (typeof jam_kerja !== "number" || typeof tarif_per_jam !== "number") {
    return res.status(400).json({ error: "Input harus berupa angka" });
  }

  let gaji = 0;

  if (jam_kerja <= 40) {
    gaji = jam_kerja * tarif_per_jam;
  } else {
    const gaji_reguler = 40 * tarif_per_jam;
    const jam_lembur = jam_kerja - 40;
    const gaji_lembur = jam_lembur * (1.5 * tarif_per_jam);
    gaji = gaji_reguler + gaji_lembur;
  }

  res.json({ gaji: gaji });
};

module.exports = { hitungGaji };
