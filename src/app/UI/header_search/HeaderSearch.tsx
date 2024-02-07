import React, { FC } from 'react'
import style from "./HeaderSearch.module.scss"
import Image from 'next/image'
import searchImage from './img/search.png'
import searchImageFAT from './img/searchFAT.png'

type Props = {}
        /*<div className={style.containerImg}>
            <Image
                src={searchImageFAT}
                alt='Search'
                fill
            />
        </div>*/
const HeaderSearch:FC = (props: Props) => {
  return (

    <input 
        className={style.input} 
        type="search" 
        placeholder='Input game name' 
    />
 
  )
}

export default HeaderSearch