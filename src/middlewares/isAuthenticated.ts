import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ForbiddenError } from "../helpers/api-errors";

interface Payload {
  sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new ForbiddenError("Usuário não autenticado");
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    req.user_id = sub;

    return next();
  } catch {
    throw new ForbiddenError("Usuário não autenticado");
  }
}
