import express from "express";
import Database from "../../config/db.js";

const router = express.Router();

// /names
router.get("/", (req, res, next) => {
  Database.all("SELECT * FROM names", [], (err, rows) => {
    if (err) {
      // next(err) // express will handle this error
      console.error(err);
      return res.status(500).render("names");
    }

    const names = rows.map((row) => row.name);
    res.render("names", { names });
  });
});

// /names/json
router.get("/json", (req, res) => {
  Database.all("SELECT * FROM names", [], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ err });
    }

    const names = rows.map((row) => row.name);
    res.json({ names });
  });
});

export default router;
