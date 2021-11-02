import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/GlobalSvgSelector'
import style from './ThisDay.module.scss'

interface Props {}

export const ThisDay = (props: Props) => {
  return (
    <div className={style.this_day}>
      <div className={style.top_block}>
        <div className={style.wrapper}>
          <div className={style.temp}>20°</div>
          <div className={style.current_day}>Сегодня</div>
        </div>
        <GlobalSvgSelector id='sun' />
      </div>
      <div className={style.bottom_block}>
        <div className={style.time}>Время: 21:00</div>
        <div className={style.city}>Москва</div>
      </div>
    </div>
  )
}
