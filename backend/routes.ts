import { Express } from "express";
import { Request, Response } from "express";

export default function routes(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
  });
}
