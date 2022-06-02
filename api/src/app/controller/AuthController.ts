import User from "../models/User";

import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import authConfig from "../../config/authConfig";

class AuthController {
  async index(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({});
  }

  async create(req: Request, res: Response): Promise<Response | User> {
    const { username, password } = req.body;

    if (!username || !password) return res.status(404).json({});

    try {
      const user = await User.findOne({ where: { username } });

      if (!user) return res.status(404).json({});

      if (!(await user.password_check(password)))
        return res.status(404).json({});

      return res.json({
        user: user.id,
        token: jwt.sign({ id: user.id }, authConfig.secret, {
          expiresIn: authConfig.expireIn,
        }),
      });
    } catch (error) {}

    return res.json();
  }
}

export default new AuthController();
