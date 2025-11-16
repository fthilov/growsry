import type { Metadata } from "next";
import "@app/globals.css";

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
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
