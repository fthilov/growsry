import type { Metadata } from "next";
import "./globals.css";
import Header from "./core/components/Header/page";
import Footer from "./core/components/Footer/page";
import userss from "./db/prisma-client";

export const metadata: Metadata = {
    title: "Growsry",
    description:
        "A personal recipe and grocery list manager by Felix von dem Berge.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const users = userss;
    return (
        <html lang="en">
            <body className="antialiased">
                <Header />
                <div>
                    {users.map((user) => (
                        <div key={user.id}>Mail: {user.email}</div>
                    ))}
                </div>
                {children}
                <Footer />
            </body>
        </html>
    );
}
