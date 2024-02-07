'use client'
import { useEffect, useState } from "react";
import WraperCard from "./components/wraper_card/WraperCard";
import axios from "axios";
import { DataService } from "./service/game.sevice";
import { IGame } from "./interface/IResponseData";

type TypeResponseData = {
    count:number,
    filters:{},
    next:string,
    nofollow:boolean,
    results:[]
}

export type TypeResponseGame ={
    id?:number,
    slug:string,
    name:string,
    background_image:string,
    released:string
    genres:TypeResponseGenre[]
}

export type TypeResponseGenre={
    id?:number,
    name:string
}

export default function Home() {

  const [data, setData] = useState<TypeResponseData>()

    let results: TypeResponseGame[] = []
/*
    useEffect(()=>{
        axios.get('http://localhost:1637/api/test').then(data=>setData(data.data))
    },[])
   */ 

    useEffect(()=>{
        DataService.getAll('games').then(data=>setData(data))
    },[])
    

    if(data){
        results= data.results
    }

  return (
    <>
      <WraperCard resultList = {results} />
    </>
  )
}
