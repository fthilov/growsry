import { GET } from "@api/shops/route";
import Link from "next/link";

export default async function Main() {
    const response = await GET();
    const shops = await response.json();

    return (
        <main className="p-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Shops</h1>
                <Link href="/shops/new">
                    <button type="button" className="text-2xl">
                        +
                    </button>
                </Link>
            </div>

            <ul>
                {shops.map((shop: any) => (
                    <li key={shop.id} className="border-b py-2">
                        {shop.name}
                    </li>
                ))}
            </ul>
        </main>
    );
}
