import express from "express";

const api = express.Router();

api.get("/", (req, res) =>
  res.json({
    message: "Welcome to Coding Profile Api",
    status: "200 (okay)",
    "available routes": ["/graphql (for apollo sandbox)"],
  })
);

export default api;
