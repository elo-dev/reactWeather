import React from 'react'
import style from './Days.module.scss'

interface Props {
    
}

export interface Tabs {
    value: string
}

export const Tabs = (props: Props) => {

const tabs: Tabs[] = [
    {
        value: 'На неделю'
    },
    {
        value: 'На 10 дней'
    },
    {
        value: 'На месяц'
    }
]

    return (
        <div className={style.tabs}>
            <div className={style.wrapper}>
                {tabs.map((tab: Tabs) => (
                    <div key={tab.value} className={style.tab}>
                        {tab.value}
                    </div>
                ))}
            </div>
            <div className={style.cancel}>Отменить</div>
        </div>
    )
}
