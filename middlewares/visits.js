export function visitsCounter(req, res, next) {
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
