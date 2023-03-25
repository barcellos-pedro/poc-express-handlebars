import express, { Application } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { create } from "express-handlebars";

import helpers from "../../lib/helpers";
import { visitsCounter } from "../../middlewares/visits";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Application = express();
const hbs = create({
  extname: ".hbs",
  helpers,
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(visitsCounter);

export { PORT, hbs };
export default app;
