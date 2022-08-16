import express from "express";

import userRoutes from "./routers/user.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(3000);
}

export default app;
