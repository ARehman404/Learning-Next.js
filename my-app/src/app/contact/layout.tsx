import { Inter } from 'next/font/google'
import { Metadata } from "next"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'contact',
}
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