import { Response, Request, NextFunction } from "express";
import jwt, { Secret, verify } from "jsonwebtoken";
import { promisify } from "util";
import authConfig from "../../config/authConfig";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const authHeader: string = req.headers.authorization;

  if (!authHeader)
    return res.status(400).json({
      ErrorCode: "invalid_request",
      Error: "Token de autorização é invalido",
    });

  const [, token] = authHeader.split(" ");

  try {
    const verifyToken = promisify<string, string>(jwt.verify);

    const decoded = (await verifyToken(token, authConfig.secret)) as any;

    req.userId = decoded.id;

    return next();
  } catch (error) {
    return res.status(401).json({ error: "token de autenticação  expirou" });
  }
};
