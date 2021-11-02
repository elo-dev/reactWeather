import { ReactNode, useState } from 'react'
import { Theme, ThemeContext } from '../context/ThemeContext'
import { changeCssVariable } from '../utils/changeCssVariable'
import { storage } from '../utils/storage'

interface Props {
    children: ReactNode
}

export const ThemeProvider = ({ children, ...props }: Props) => {

    const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT)

    changeCssVariable(theme)
    const changeTheme = (theme: Theme) => {
        storage.setItem('theme', theme)
        changeCssVariable(theme)
        setTheme(theme)
    }

  return <ThemeContext.Provider value={{theme, changeTheme}} {...props}>
      {children}
  </ThemeContext.Provider>
}
