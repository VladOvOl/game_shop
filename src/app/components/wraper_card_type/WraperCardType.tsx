import CardTypeGame from '@/app/UI/card_type_game/CardTypeGame'
import React, { FC } from 'react'
import style from './WraperCardType.module.scss'
import { ICategorys } from '@/app/interface/IResponseData'


type Props = {
    resultList:ICategorys[]
}

const WraperCardType:FC<Props> = ({resultList}) => {

  if(resultList){
    console.log(resultList)
  }

  return (
    <div className={style.container}>
       {resultList && resultList.map(result=>     
            <div className={style.column} >
                <CardTypeGame 
                    id={result.id} 
                    name={result.name}
                    image_background={result.image_background}
                    slug={result.slug}
                    year_start={result.year_start}
                />
            </div>)   
        }
    </div>   
    )
}

export default WraperCardType