import Link from 'next/link';
import './globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <header>
                    <Link href={'/champions'}>챔피언 목록</Link>
                    <Link href={'/items'}>아이템 목록</Link>
                    <Link href={'/rotation'}>로테이션 정보 페이지</Link>
                </header>
                {children}
            </body>
        </html>
    );
}
