import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Page',
    description: 'About',
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <>
        <main>
            {children}
        </main>
        </>
    )
}