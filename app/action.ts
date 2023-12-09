"use server"
export const fetchanime=async(page:number)=>{
    const response=await fetch(`https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity`);
    const data=await response.json();
    console.log(data);
    
    return data;
}