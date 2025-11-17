import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center flex-col">
            <Image src="logo.svg" alt="Logo" width={500} height={500} />
        </div>
    );
}
