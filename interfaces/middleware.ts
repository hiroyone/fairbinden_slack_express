import { Request, Response, NextFunction } from "express";

export interface MiddlewareFn {
  (req: Request, res: Response, next: NextFunction): void;
}

export interface HttpException extends Error {
  status: number;
  message: string;
}

export type Protocol = "http" | "https";

export interface Website {
  protocol: Protocol;
  host: string;
}
