import { Request, Response, NextFunction } from "express";
export function visitsCounter(req: Request, res: Response, next: NextFunction) {
  // we can clear the cookies
  // res.clearCookie('visits')

  if (req.cookies?.visits) {
    let count = +req.cookies.visits;
    count += 1;
    res.cookie("visits", count.toString());
  } else {
    res.cookie("visits", "1");
  }
  next();
}
