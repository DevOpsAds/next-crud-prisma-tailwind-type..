import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/backend/database/prismaClient";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

export class CreateUser {
  async handle(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id, name, idade = 12 } = req.body;

    const cliente = await prisma.user.create({
      data: {
        id,
        name,
        idade,
      },
    });

    return res.json(cliente);
  }
}
