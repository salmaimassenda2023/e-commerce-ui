import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
            <div className="flex flex-col gap-4 items-center md:items-start">
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public" className="flex items-center">
                    <Image src="/logo.png" alt="TrendLama" width={36} height={36} />
                    <p className="hidden md:block text-md font-medium tracking-wider text-white">
                        IS. SHOP
                    </p>
                </Link>
                <p className="text-sm text-gray-400">© 2025 IMASSENSA.</p>
                <p className="text-sm text-gray-400">All rights reserved.</p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public">Homepage</Link>
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public">Contact</Link>
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public">Terms of Service</Link>
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public">Privacy Policy</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public">All Products</Link>
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public">New Arrivals</Link>
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public">Best Sellers</Link>
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public">Sale</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public">About</Link>
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public">Contact</Link>
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public">Blog</Link>
                <Link href="/Users/AdMin/Desktop/e-commerce-ui/client/public">Affiliate Program</Link>
            </div>
        </div>
    );
};

export default Footer;