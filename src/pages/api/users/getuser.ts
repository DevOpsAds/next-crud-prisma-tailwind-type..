import { getUsersDB } from "@/backend/controllers/userDB";
export default async (req: any, res: any) => {
  const getUsers = await getUsersDB();
  res.json({ result: getUsers });
};
