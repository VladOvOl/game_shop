import React, { FC } from 'react'
import style from './Header.module.scss'
import HeaderSearch from '@/app/UI/header_search/HeaderSearch'
import UserIcon from '@/app/UI/user_icon/UserIcon'
import BtnMenuBurger from '@/app/UI/btn_menu_burger/BtnMenuBurger'
import { useRouter } from 'next/router'

const Header:FC =( ) =>{

   // const router = useRouter()

   // console.log(router.asPath)

    return(
        <header className={style.headerContainer}>
            <div className={style.containerLogo}>
                <span>GameShop</span>
            </div>

            <div className={style.containerSearch}>
                <HeaderSearch/>
            </div>

            <div className={style.containerNav}>
                <div className={style.navList}>
                    My library
                </div>
                
                <UserIcon/>
                <BtnMenuBurger/>
               
            </div>
        </header>
    )
}
export default Header