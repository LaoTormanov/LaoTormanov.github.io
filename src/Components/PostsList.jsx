import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Post from './Post'
import '../styles/App.css'

const PostsList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>)
    }

    return(
        <div className='standart-block'>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'
                    >
                        <Post remove={remove} number={index +1} post={post}/>
                    </CSSTransition>
                    // 2. Строка "post={post}" - это я функции post из компонента Post.jsx передаю пропс? ОТВЕТ: Нет, я указываю имя пропсов, которое сам же им присвоил строкой "props.post" в компоненте, в котором их использую.
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostsList