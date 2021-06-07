import { sendDailyPageInfoToSlack } from "../routes/dailyPageInfo";
import { MiddlewareFn } from "../interfaces/middlewareInterface";

/*
 * call other imported services, or same service but different functions here if you need to
 */
export const sendFairbindenLunchMenuToSlack: MiddlewareFn = async (
  req,
  res,
  next
) => {
  const { user, content } = req.body;
  try {
    const sendResult = await sendDailyPageInfoToSlack(user, content);
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.send(sendResult);
    // res.sendStatus(201);
    // next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};
