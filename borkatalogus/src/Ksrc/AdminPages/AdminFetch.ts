
const BaseUrl =  "https://p9qpdn6c-7072.euw.devtunnels.ms/"
export async function GetDbData(url:string) {

    try{
        const response = await fetch(`${BaseUrl}${url}`)
        console.log(url)
        if(!response.ok){
             throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result
    }
    catch (error:any) {
    console.error(error.message);
}}