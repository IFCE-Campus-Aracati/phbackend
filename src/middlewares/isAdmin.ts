import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../helpers/api-errors";
import { decode } from "jsonwebtoken";
import prismaClient from "../prisma";

interface Payload {
  role: string;
}

export function isAdmin(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    throw new ForbiddenError("Usuário não autenticado");
  }

  const [, token] = authToken.split(" ");

  const { role } = decode(token) as Payload;

  if (role === "client") {
    throw new ForbiddenError("Usuário não autenticado");
  }

  return next();
}
