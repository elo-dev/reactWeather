import React from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector'
import style from './Header.module.scss'

interface Props {}

export const Header = (props: Props) => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    
    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            heigth: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100
        })
    }

    return (
        <div className={style.header}>
            <div className={style.wrapper}>
                <div className={style.logo}><GlobalSvgSelector id='header-logo'/></div>
                <div className={style.title}>React Weather</div>
            </div>
            <div className={style.wrapper}>
                <div className={style.change_theme}>
                    <GlobalSvgSelector id='change-theme' />
                </div>
                <Select styles={colourStyles} options={options} />
            </div>
        </div>
    )
}
