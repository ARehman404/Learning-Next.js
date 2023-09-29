import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <>
        <main className={inter.className}>
            {children}
        </main>
        </>
    )
}