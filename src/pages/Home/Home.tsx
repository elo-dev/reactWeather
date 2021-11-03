import React, { useEffect } from 'react'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import { Card } from './components/Days/Card'
import { Days } from './components/Days/Days'
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo'
import style from './Home.module.scss'

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch()

  const { weather } = useCustomSelector(state => state.currentWeatherSliceReducer)
  
  useEffect(() => {
    dispatch(fetchCurrentWeather('egypt'))
  }, [])

  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <Days />
    </div>
  )
}
