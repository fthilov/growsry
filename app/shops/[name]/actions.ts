"use server";

import { prisma } from "@lib/prisma";

export async function createShop(name: string) {
    return prisma.shop.create({
        data: { name },
    });
}
