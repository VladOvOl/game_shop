import React from 'react'
import style from './BtnMenuBurger.module.scss'
import Image from 'next/image'
import img from './img/icons8-меню-50.png'


type Props = {}

const BtnMenuBurger = (props: Props) => {
  return (
    <div className={style.containerImg}>
        <Image
            src={img.src}
            width={30}
            height={30}
            alt=''
        />
    </div>
    
  )
}

export default BtnMenuBurger