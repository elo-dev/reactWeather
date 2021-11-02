import React from 'react'
import { Card } from './components/Days/Card'
import { Days } from './components/Days/Days'
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo'
import style from './Home.module.scss'

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}
