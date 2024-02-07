`use client`
import React,{FC} from 'react'
import style from './CardTypeGame.module.scss'
import { ICategorys } from '@/app/interface/IResponseData'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'





interface Props extends ICategorys {


}

const CardTypeGame:FC<Props> = (props) => {

    const path = usePathname()

    const path2 = useParams()


  return (
        <div className={style.container}>
            <img src={props.image_background} alt={props.slug} />
            {
                props.year_start&& <p>{props.year_start}</p>
            }
            <br />

            <Link href={`${path}/${props.id}`}>
                {props.name}
            </Link>

        </div>
  )
}

export default  CardTypeGame