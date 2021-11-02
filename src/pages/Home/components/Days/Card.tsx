import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/GlobalSvgSelector'
import { Day } from './Days'
import style from './Days.module.scss'

interface Props {
    day: Day
}

export const Card = ({ day }: Props) => {
    return (
        <div className={style.card}>
            <div className={style.day}>{day.day}</div>
            <div className={style.day_date}>{day.day_info}</div>
            <div className={style.day_img}>
                <GlobalSvgSelector  id={day.icon_id} />
            </div>
            <div className={style.temp_day}>{day.temp_day}</div>
            <div className={style.temp_night}>{day.temp_night}</div>
            <div className={style.info}>{day.info}</div>
        </div>
    )
}
