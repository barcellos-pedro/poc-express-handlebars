import app, { PORT } from "../config/server.js";
import homeRoutes from "./routes/home-routes.js";
import namesRoutes from "./routes/names-routes.js";

app.use("/", homeRoutes);
app.use("/names", namesRoutes);
app.get("/home", (_, res) => res.redirect("/"));
app.get("/form", (_, res) => res.render("form"));
app.post("/upload", (_, res) => res.json(req.body));
app.get("/download-database", (_, res) => res.download("db.db"));

app.listen(PORT, () =>
  console.log(`⚡️ Server running on http://localhost:${PORT}`)
);
