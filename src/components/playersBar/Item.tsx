import { gameService } from 'gameService'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { IPlayer } from 'store/playerSlice'
import tileSlice from 'store/tileSlice'
import styled from 'styled-components'

type Props = {
  player: IPlayer
  activePlayer: string
}

export type PlayerMoveInputRecievedEvent = {
  type: string
  value: number
}

const Item: FC<Props> = ({ player, activePlayer }) => {
  // const dispatch = useDispatch()

  const isActive = player.id === activePlayer

  const move = () => {
    console.log('move clicked')
    // dispatch(
    //   tileSlice.actions.movePlayer({
    //     id: activePlayer,
    //     value: 1,
    //   }),
    // )

    // const moves = window.confirm('enter moves') // типа открыли модалку

    const moves = window.prompt('enter moves: ', '1')

    gameService.send('player_move_input_recieved', { value: moves })

    // const event = {
    //   type: 'player_move_input_recieved',
    //   value: 1,
    // }
    // gameService.send(event)
  }

  return (
    <PlayerContainer>
      <div>{player.name}</div>
      {isActive && <button onClick={move}>move</button>}
    </PlayerContainer>
  )
}

export { Item }

const PlayerContainer = styled.div`
  width: 50px;
  border: 1px solid #6dffd6;
  padding: 10px;
  margin-right: 1rem;
  background-color: cadetblue;
  color: white;
  text-align: center;
`
