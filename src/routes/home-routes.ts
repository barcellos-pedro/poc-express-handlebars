import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const data = {
    info: { name: "Pedro", age: 26, status: true },
  };

  // pass data to template through locals
  res.locals.title = "Home";

  // populated through middleware
  res.locals.visits = req.cookies.visits;

  res.render("index", data);
});

export default router;
