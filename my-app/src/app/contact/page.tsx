
'use client'
import axios from "axios"
import { useEffect, useState } from "react"

const Contact: React.FC = () => {

    const [names, setNames] = useState<string[]>([])

    useEffect(() => {
        async function getNames() {
            try {
                const response = await axios.get('../api/name');
                setNames(response.data); 
                console.log(response.data)
            } catch (error) {
                console.error(error);
            }
        }
        getNames();
    }, []);

    return (
        <>
            <h1>Contact Page</h1>
            <h2>Data Fetched from the Names Api</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </>
    );
}

export default Contact;
