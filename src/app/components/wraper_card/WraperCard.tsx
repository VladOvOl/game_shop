'use client'
import React, { FC, useEffect, useState } from 'react'
import style from './WraperCard.module.scss'
import CardGame from '@/app/UI/card_game/CardGame'
import axios from 'axios'
import { IGame } from '@/app/interface/IResponseData'



type Props = {
    resultList:IGame[]
}



const WraperCard:FC<Props> = ({resultList}) => {



  return (
        <div className={style.container}>
           {resultList && resultList.map(result=>
          
            <div className={style.column} key={result.id} >
                <CardGame 
                    id={result.id}
                    slug={result.slug} 
                    name={result.name} 
                    background_image={result.background_image}
                    released={result.released}
                    genres={result.genres}
                    metacritic={result.metacritic}
                    platforms={result.platforms}
                />
            </div>)   }
    </div>   
  )
}

export default WraperCard