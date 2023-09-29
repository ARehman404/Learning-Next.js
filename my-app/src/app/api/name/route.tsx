
const names: string[] = ['Abdul', 'Dav', 'Ovi']

export async function GET(request:Request){
    const namesJson = await JSON.stringify(names)
    return new Response(namesJson);
}