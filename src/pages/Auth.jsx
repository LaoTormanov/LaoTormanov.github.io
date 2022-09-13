import React from 'react'
import { useContext } from 'react'
import MyButton from '../Components/UI/Button/MyButton'
import MyInput from '../Components/UI/Input/MyInput'
import { MyContext } from '../context/context'

const Auth = () => {

    const {auth, setAuth} = useContext(MyContext)

    const login = event => {
        event.preventDefault()
        setAuth(true)
        localStorage.setItem('auth', 'true')
    }

  if (auth) {
    return (
      <div className='standart-block' style={{display: 'flex', justifyContent: 'center'}}><h1>Вы уже авторизованы!</h1></div>
    )
  }

  return (
    <div>
      <form onSubmit={login} className='standart-block'>
        <MyInput placeholder='Введите логин..'/>
        <MyInput placeholder='Введите пароль..'/>
        <MyButton>Вход</MyButton>
      </form>
    </div>
  )
}

export default Auth
