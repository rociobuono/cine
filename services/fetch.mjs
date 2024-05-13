//backend url: url base
//url: url de cada endpoint
//objString objeto
const backendurl = "http://localhost:8080/";
export async function GET(url, data = {}){
    const objString = '?' + new URLSearchParams(data).toString();
    return await fetch(backendurl + url + objString, {
        method:'GET',
        mode: 'cors',
        // headers: {
        //     'Authorization': `Bearer ${localStorage.getItem('token')}`
        // }
    })
    .then((res) => res.json())
    .then((res)=>res)
    .catch((err)=> console.log(err));
}
export async function POST(url, data){
    return await fetch(backendurl + url, {
        method:'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer $(localStorage.getItem('token'))`
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((res)=>res)
    .catch((err)=> console.log(err));
}