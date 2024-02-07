
import { platform } from 'os';
export interface IResponseData{
    count:number,
    filters:{},
    next:string,
    nofollow:boolean,
    results:[]
} 

export interface IGame {
    id?:number,
    slug:string,
    name:string,
    background_image:string,
    released:string,
    metacritic:string,
    genres:IGenres[]
    platforms:ICategorys[]
}

export interface IGenres{
    id?:number,
    name:string
}

export interface ICategorys{
    id:string,
    name:string,
    slug:string,
    image_background:string,
    year_start?:string
}