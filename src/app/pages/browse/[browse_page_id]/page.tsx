'use client'
import WraperCardType from '@/app/components/wraper_card_type/WraperCardType'
import { ICategorys } from '@/app/interface/IResponseData'
import axios from 'axios'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

type Props = {
    params:{
        browse_page_id:string
    }
}

 type TypeData = {
  results:ICategorys[]
  
}

const page:NextPage<Props> = (props) => {

    let[data,setData] = useState<TypeData>()

    let results: ICategorys[] = []

    useEffect(()=>{
        axios.get(`https://api.rawg.io/api/${props.params.browse_page_id}?key=75914cb5b1324db79e107e5342a81c47`).then(data=>setData(data.data))
    },[])
    
    if(data){
        results=data.results
    }

  return (
    <>

        <WraperCardType
           resultList={results}
        />

    </>
  )
}

export default page