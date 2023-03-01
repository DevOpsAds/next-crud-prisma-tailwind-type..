import { prisma } from "@/backend/database/prismaClient";

interface CreateUser {
  name: string;
  idade: number;
}

export async function getUsersDB() {
  return await prisma.user.findMany();
}

export async function createUserDB(user: CreateUser) {
  return await prisma.user.create({
    data: user,
  });
}
