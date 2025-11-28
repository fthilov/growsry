import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@lib/prisma";

// GET /api/shops - Get all shops
export async function GET() {
    try {
        const shops = await prisma.shop.findMany();
        return NextResponse.json(shops, { status: 200 });
    } catch (error) {
        console.error("Error fetching shops:", error);
        return NextResponse.json(
            { message: "Failed to fetch shops" },
            { status: 500 }
        );
    }
}

// POST /api/shops - Create a new shop
export async function POST(req: NextRequest) {
    try {
        const { name } = await req.json();

        if (!name) {
            return NextResponse.json(
                { message: "Name is required" },
                { status: 400 }
            );
        }

        const newShop = await prisma.shop.create({
            data: {
                name,
            },
        });

        return NextResponse.json(newShop, { status: 201 });
    } catch (error: any) {
        if (error.code === "P2002") {
            // Prisma unique constraint violation code
            return NextResponse.json(
                { message: "Shop with this name already exists" },
                { status: 409 }
            );
        }
        console.error("Error creating shop:", error);
        return NextResponse.json(
            { message: "Failed to create shop" },
            { status: 500 }
        );
    }
}
