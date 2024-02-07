import React from 'react'
import style from './CardGame.module.scss'
import Image from 'next/image'
import { TypeResponseGame, TypeResponseGenre } from '@/app/page'
import { IGame } from '@/app/interface/IResponseData'
import { platform } from 'os'
import Link from 'next/link'


type Props =IGame

const arrGenresToString = (array:TypeResponseGenre[]) =>{
    let str:string=''
    array.map(obj=>str = str + obj.name.toString()+' ')
    return str
}

const CardGame = (props: Props) => {

    
props.platforms.map(platform=>
   console.log(platform.id)
)
console.log(props.platforms)

  return (
    <div className={style.container}>

            <div className={style.containerImg}>
                <Image src={props.background_image}
                    alt='game-img'
                    fill
                />
            </div>

            <div className={style.containerInfo}>

                <div className={style.containerUnderTitle}>
                    <div className={style.containerImgPlatform}>

                    </div>
                    <p>{props.metacritic}</p>
                </div>

                <div className={style.contsinerLink}>
                    <Link className={style.titleCard} href={`/pages/all_games/${props.id}`}>
                        {props.name}
                    </Link>
                </div>
                

                <div className={style.containerDetailInfo}>
                    <ul>
                        <li><span>Release date:</span><span>{props.released}</span></li>
                        <li><span>Genre:</span><span>{arrGenresToString(props.genres)}</span></li>
                        <li><span>Chart:</span><span> Z6fvfv</span></li>
                    </ul>
                    
                </div>
            </div>
            
        
    </div>
  )
}

export default CardGame