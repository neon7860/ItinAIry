const API_URL = import.meta.env.VITE_API_URL;

export async function getPing(){
    const response = await fetch(`${API_URL}/ping`)
    return response.json()
}