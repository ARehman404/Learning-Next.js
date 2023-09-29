
type Params = {
    params: {
        name: string
    }
}

export default function NamePage({ params: { name } }: Params ){
    return(
        <h1>Name: {name}</h1>
    )
}