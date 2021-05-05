import { Request, Response, NextFunction } from "express";

export type MiddlewareFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export interface HttpException extends Error {
  status: number;
  message: string;
}
