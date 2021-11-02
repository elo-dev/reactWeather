import React from 'react'
import { Route, Switch } from 'react-router'
import { Header } from './pages/Header/Header'
import { Home } from './pages/Home/Home'
import { Popup } from './pages/Popup/Popup'
import './styles/index.scss'

const App = () => {
  return (
    <div className='container'>
      {/* <Popup /> */}
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  )
}

export default App
