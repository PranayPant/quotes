import axios from 'axios'

const domain = "https://quotes.rest"
const api = {
    qod: "/qod",
    categories: "/qod/categories",
}
const randomAPI = "http://quotes.stormconsultancy.co.uk/random.json"

const clicksAPI = "/api/click"

export async function fetchQOD(){
    try{
        const {data} = await axios.get(new URL(api.qod, domain))
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

export async function fetchCategories(){
    try{
        const {data} = await axios.get(new URL(api.categories, domain))
        return Object.keys(data.contents.categories)
    }
    catch(err){
        throw err
    }
}

export async function fetchRandom(){
    try{
        const {data} = await axios.get(randomAPI)
        return {
            quote: data.quote,
            author: data.author,
        }
    }
    catch(err){
        throw err
    }
}

export async function fetchClicks(){
    try{
        const {data} = await axios.get(clicksAPI)
        return {
            clicks: data.clicks
        }
    }
    catch(err){
        throw err
    }
}

