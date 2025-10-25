"use server";

import prisma from "@lib/prisma";

export async function GET(context: any) {
    const { params } = context;
    const shop = await prisma.shop.findUnique({
        where: {
            id: Number(params.id),
        },
    });

    if (!shop)
        return new Response(JSON.stringify({ error: "Shop not found !" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });

    return new Response(JSON.stringify(shop), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
