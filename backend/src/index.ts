import express, { Request, Response } from "express";
const app = express();

app.get(
  "/",
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
  }),
);

app.listen(8100, () => {
  console.log("Server is running on port 8100");
});
