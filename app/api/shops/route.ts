import prisma from "@/app/lib/prisma";

export async function GET() {
    const shops = await prisma.shop.findMany();

    return new Response(JSON.stringify(shops), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(req: Request) {
    const body = await req.json();

    const name: string = body.name;

    const newShop = await prisma.shop.create({
        data: {
            name: name,
        },
    });

    return new Response(JSON.stringify(newShop), {
        status: 201,
        headers: { "Content-Type": "application/json" },
    });
}
