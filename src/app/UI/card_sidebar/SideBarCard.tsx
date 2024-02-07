import React, { FC } from 'react'
import style from './SideBarCard.module.scss'
import Link from 'next/link'



type Link ={
    titleLink:string,
    path:string,
    viewBox:string,
    pathLink?:string
    
}

type Props = { 
    titleCard:string,
    linkCard?:string,
    links:Link[]
}


const SideBarCard:FC<Props> = ({titleCard,linkCard,links}) => {

    
    

  return (
    <div className={style.containerCard}>
        {linkCard?
            <Link className={style.title}  href={linkCard} >
                {titleCard}
            </Link>:

            <p className={style.title}>
                {titleCard}
            </p>
        }
        
        {
            links.map(links=>
                <Link className={style.containerLink} href={links.pathLink?links.pathLink:"eror"}>
                    <div className={style.containerImg}>
                        <svg className={style.svg} 
                            fill="#FFF" 
                            height={25} 
                            width={25} 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox={links.viewBox}>
                            <path d={links.path}></path>
                        </svg>
                    </div>
                    
                    <p className={style.link}>{links.titleLink}</p>

                </Link>
            )
        }
    </div>
  )
}

export default SideBarCard