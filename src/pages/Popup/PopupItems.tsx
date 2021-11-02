import React from 'react'
import { IndicatorSvgSelector } from '../../assets/icons/indicators/IndicatorSvgSelector'
import { Item } from './Popup'
import style from './Popup.module.scss'

interface Props {
    item: Item
}

export const PopupItems = ({ item }: Props) => {
    const { icon_id, name, value } = item
    return (
        <div className={style.item}>
            <div className={style.indicator}>
                <IndicatorSvgSelector id={icon_id} />
            </div>
            <div className={style.indicator_name}>{name}</div>
            <div className={style.indicator_value}>{value}</div>
        </div>
    )
}
