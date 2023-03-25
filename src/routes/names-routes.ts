import express, { Request, Response, Router } from "express";
import db from "../config/database";
import { Name } from "../types/name";

const router: Router = express.Router();

// /names
router.get("/", (_req: Request, res: Response) => {
  db.all("SELECT * FROM names", [], (err: Error | null, rows: Array<Name>) => {
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
router.get("/json", (_req: Request, res: Response) => {
  db.all("SELECT * FROM names", [], (err, rows: Array<Name>) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ err });
    }

    const names = rows.map((row) => row.name);
    res.json({ names });
  });
});

export default router;
