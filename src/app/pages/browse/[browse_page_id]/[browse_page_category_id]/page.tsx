'use client'
import WraperCard from '@/app/components/wraper_card/WraperCard'
import { IGame, IResponseData } from '@/app/interface/IResponseData'
import { DataService } from '@/app/service/game.sevice'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

type Props = {
    params:{
        browse_page_category_id:string,
        browse_page_id:string
        
    }
}

const page:NextPage<Props> = (props) => {

    const [data, setData] = useState<IResponseData>()

    let result:IGame[]=[]

    useEffect(()=>{
        if(props.params.browse_page_id=='platforms'){
            DataService.getAllByPlatform('games',props.params.browse_page_category_id)
            .then(data=>setData(data))
        }
        if(props.params.browse_page_id=='genres'){
            DataService.getAllByGenre('games',props.params.browse_page_category_id)
            .then(data=>setData(data))
        }
        if(props.params.browse_page_id=='stores'){
            DataService.getAllByStore('games',props.params.browse_page_category_id)
            .then(data=>setData(data))
        }
        if(props.params.browse_page_id=='creators'){
            DataService.getAllByCreator('games',props.params.browse_page_category_id)
            .then(data=>setData(data))
        }
        if(props.params.browse_page_id=='tags'){
            DataService.getAllByTag('games',props.params.browse_page_category_id)
            .then(data=>setData(data))
        }
        if(props.params.browse_page_id=='developers'){
            DataService.getAllByPublisher('games',props.params.browse_page_category_id)
            .then(data=>setData(data))
        }
        if(props.params.browse_page_id=='publishers'){
            DataService.getAllByPublisher('games',props.params.browse_page_category_id)
            .then(data=>setData(data))
        }

    },[])

    if(data){
        result = data.results
    }

    return (
        <>
            <p style={{color:'white'}}>Work</p>
            <div>{props.params.browse_page_category_id}</div>
            {
                <WraperCard resultList={result}/>
            }
        </>
        

    )
}

export default page