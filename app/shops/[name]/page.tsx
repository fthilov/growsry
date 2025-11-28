"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createShop } from "./actions";
import { useState } from "react";

export default function ShopDetail() {
    const name_param = usePathname().split("/").pop() || "";
    const [shopName, setShopName] = useState("");

    async function handleCreate() {
        console.log("Creating shop:", shopName);
        const shop = await createShop(shopName);
        console.log("Created shop:", shopName);
        window.location.href = `/shops/${shop.name}`;
    }

    return (
        <div className="flex flex-col align-center p-8 gap-y-4">
            <Link href="/" className="font-bold mb-8 text-gray-400 text-sm">
                Back to Home
            </Link>
            {name_param == "new" ? (
                <>
                    <h1 className="text-2xl font-bold text-center">Add Shop</h1>
                    <p className="text-center">
                        Create a new shop by entering the shop name below.
                    </p>
                    <input
                        type="text"
                        name="shopName"
                        className="border border-white rounded-full px-8 py-4 outline-none"
                        placeholder="Name"
                        defaultValue={shopName}
                        onChange={(e) => setShopName(e.target.value)}
                    />
                    <button
                        type="button"
                        className="bg-white rounded-full text-black px-8 py-4"
                        onClick={handleCreate}
                    >
                        Create Shop
                    </button>
                </>
            ) : (
                <div className="flex justify-between">
                    <h1 className="font-bold text-2xl">{name_param}</h1>
                    <button className="font-bold text-xl">+</button>
                </div>
            )}
        </div>
    );
}
