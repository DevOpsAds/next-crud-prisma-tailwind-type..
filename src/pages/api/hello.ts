// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bodyParser from "body-parser";
import { prisma } from "@/backend/database/prismaClient";

const jsonParser = bodyParser.json();

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    console.log("verific");
    jsonParser(req, res, async () => {
      const { name, idade } = req.body;

      const newUser = await prisma.user.create({
        data: {
          name,
          idade,
        },
      });

      res.status(200).json(newUser);
    });
    // res.status(200).json({ name: "Continue John back Doe" });
  } else {
    res.status(401).json({ name: "Continue John  neo Doe" });
  }
}
