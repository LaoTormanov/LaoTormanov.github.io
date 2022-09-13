import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../../context/context'
import MyButton from '../Button/MyButton'
import cl from './Navigation.module.css'

const Navigation = () => {

  const {setAuth} = useContext(MyContext)

  const logout = () => {
    setAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <header className={cl.navigation}>
        <nav className={cl.nav__content}>
          <ul className={cl.nav__links}>
            <li><Link to='/'>Главная страница</Link></li>
            <li><Link to='/posts'>Посты</Link></li>
            <li><Link to='auth'>Авторизация</Link></li>
          </ul>
        </nav>
        <MyButton onClick={logout}>Выйти</MyButton>
    </header>
  )
}

export default Navigation
