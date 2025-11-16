"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createShop(name: string) {
    return prisma.shop.create({
        data: { name },
    });
}
