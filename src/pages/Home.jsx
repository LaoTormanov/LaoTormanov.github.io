import React from 'react'

const Home = () => {
  return (
    <div className='standart-block'>
      <div className='post' style={{flexDirection: 'column'}}>
        <h1>
          Добро пожаловать на мой первый сайт!
        </h1>
        <p>
          Для авторизации на сайте достаточно нажать кнопку "Войти" - бэкенд у сайта отсутствует.
        </p>
        <p>
          Весь основной контент располагается во вкладке "Посты". В дальнейшем туда же будет добавлена динамическая пагинация.
        </p>
        <p>Создание постов не сохраняет их на сервер (из-за отсутствия бэкенда).</p>
      </div>
    </div>
  )
}

export default Home
