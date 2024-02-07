import axios from "axios"
import * as dotenv from 'dotenv';
import { IGame, IResponseData } from "../interface/IResponseData"
import { useRouter } from "next/router";

dotenv.config();

const BaseUrl = 'https://api.rawg.io/api'
const API_KEY = '75914cb5b1324db79e107e5342a81c47'

axios.defaults.baseURL = BaseUrl



export const DataService = {

    async getAll(point:string){
    
        let data = await axios.get(`/${point}?key=${API_KEY}`)
        
        return data.data
    },

    async getAllByPlatform(point:string,platforms:string){
        let data = await axios.get(`/${point}?key=${API_KEY}&platforms=${platforms}`)

        return data.data
    },

    async getAllByGenre(point:string,genres:string){
        let data = await axios.get(`/${point}?key=${API_KEY}&genres=${genres}`)
        return data.data
    },

    async getAllByStore(point:string,store:string){
        let data = await axios.get(`/${point}?key=${API_KEY}&stores=${store}`)
        return data.data
    },

    async getAllByCreator(point:string,creator:string){
        let data = await axios.get(`/${point}?key=${API_KEY}&creators=${creator}`)
        return data.data
    },

    async getAllByTag(point:string,tag:string){
        let data = await axios.get(`/${point}?key=${API_KEY}&tags=${tag}`)
        return data.data
    },

    async getAllByDeveloper(point:string,developer:string){
        let data = await axios.get(`/${point}?key=${API_KEY}&developers=${developer}`)
        return data.data
    },

    async getAllByPublisher(point:string,publisher:string){
        let data = await axios.get(`/${point}?key=${API_KEY}&publishers=${publisher}`)
        return data.data
    }

} 