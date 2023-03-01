import { createUserDB } from "@/backend/controllers/userDB";

export default async (req: any, res: any) => {
  const { id, name, idade } = req.body;
  const createUser = await createUserDB(id, name, idade);
  res.json({ result: { createUser } });
};
