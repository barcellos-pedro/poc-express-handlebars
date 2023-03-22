import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const data = {
    names: ["ana", "pedro"],
    info: { name: "Pedro", age: 26, status: true },
  };

  // pass data to template through locals
  res.locals.title = "Home";

  // populated through middleware
  res.locals.visits = req.cookies.visits;

  res.render("index", data);
});

export default router;
