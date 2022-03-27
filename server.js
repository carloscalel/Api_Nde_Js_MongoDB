import express from "express";
import cors from "cors";
import restaurantes from "./api/restaurantes.route.js";

const app = express();

app.use(cors());
app.use(express.json()); //express acepte notación json

app.use("/api/v1/restaurants", restaurantes);
app.use("*", (req, res) =>
  res.status(404).json({
    error: "No se encuentra"
  })
);

export default app;

