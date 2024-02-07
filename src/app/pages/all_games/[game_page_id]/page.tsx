import { NextPage } from 'next'
import React from 'react'

type Props = {
    params:{
        game_page_id:string
    }
}

const GameItemPage:NextPage<Props> = (props) => {
  return (
    <div>{props.params.game_page_id}</div>
  )
}

export default GameItemPage