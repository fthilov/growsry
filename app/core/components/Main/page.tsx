import Link from "next/link";
import ShopList from "../ShopList/page";

export default async function Main() {
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
            <ShopList />
        </main>
    );
}
