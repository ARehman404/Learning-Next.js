import Link from "next/link"
import React from "react"


export default function About(){
    const names: string[] = ['Abdul', 'Dav', 'Ovi']
    return(
        <>
        <h1>About Page</h1>
        <br/>
        <h2>List of Names:</h2>
        <ul>
            {names.map((name, index) =>(
                <li key={index}>
                    <Link href={`/about/${encodeURIComponent(name)}`}>{name}</Link>
                </li>
            ))}
        </ul>
        </>
        

    )

}