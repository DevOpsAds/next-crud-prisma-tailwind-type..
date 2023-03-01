import { prisma } from "@/backend/database/prismaClient";

export async function getUsersDB() {
  return await prisma.user.findMany();
}

export async function createUserDB(id: string, name: string, idade: number) {
  const Xmas95 = new Date("December 25, 1995 23:15:30");
  const weekday = Xmas95.getDay();

  return await prisma.user.create({
    data: {
      id,
      name,
      idade,
    },
  });
}
