import axios from 'axios'

const domain = "https://quotes.rest"
const api = {
    qod: "/qod"
}

export default async function qod(){
    try{
        const {data} = await axios.get(new URL(api.qod, domain))
        return {
            quote: data.contents.quotes[0].quote,
            author: data.contents.quotes[0].author,
            img: data.contents.quotes[0].image
        }
    }
    catch(err){
        throw err
    }
}
