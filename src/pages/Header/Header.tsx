import React, { useState } from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector'
import { Theme } from '../../context/ThemeContext'
import { useTheme } from '../../hooks/useTheme'
import style from './Header.module.scss'

interface Props {}

export const Header = (props: Props) => {
  const { theme, changeTheme } = useTheme()
  
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === Theme.LIGHT ? 'rgba(71, 147, 255, 0.2)' : '#4f4f4f',
      width: '194px',
      heigth: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
  }

  const themeChange = () => {
    changeTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={style.title}>React Weather</div>
      </div>
      <div className={style.wrapper}>
        <div className={style.change_theme} onClick={themeChange}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select styles={colourStyles} options={options} />
      </div>
    </div>
  )
}
