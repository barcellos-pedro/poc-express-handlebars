import { Request, Response } from "express";
import app, { PORT } from "./config/server";
import homeRoutes from "./routes/home-routes";
import namesRoutes from "./routes/names-routes";

app.use("/", homeRoutes);
app.use("/names", namesRoutes);
app.get("/home", (_, res: Response) => res.redirect("/"));
app.get("/form", (_, res: Response) => res.render("form"));
app.post("/upload", (req: Request, res: Response) => res.json(req.body));
app.get("/download-database", (_, res: Response) => res.download("db.db"));

app.listen(PORT, () =>
  console.log(`⚡️ Server running on http://localhost:${PORT}`)
);
