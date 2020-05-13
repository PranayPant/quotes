import axios from 'axios'

const domain = "https://quotes.rest"
const api = {
    qod: "/qod"
}

export default async function qod(){
    try{
        const {data} = await axios.get(new URL(api.qod, domain))
        console.log(data)
        return {
            quote: data.contents.quotes[0].quote,
            author: data.contents.quotes[0].author,
            img: data.contents.quotes[0].background
        }
    }
    catch(err){
        throw err
    }
}

