"use client";

import type { Shop } from "@app/types/shop";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ShopList() {
    const [shops, setShops] = useState<Shop[]>([]);

    useEffect(() => {
        const fetchShops = async () => {
            const response = await fetch("/api/shops");
            const data = await response.json();
            setShops(data);
        };

        fetchShops();
    }, []);
    return (
        <ul>
            {shops.length === 0 && <li>No shops available.</li>}
            {shops.length > 0 &&
                shops.map((shop: Shop) => (
                    <li key={shop.id} className="border-b py-2">
                        <Link href={`/shops/${shop.name}`}>{shop.name}</Link>
                    </li>
                ))}
        </ul>
    );
}
