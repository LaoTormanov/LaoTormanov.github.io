import React from 'react'
import { useState } from 'react'
import MyButton from './UI/Button/MyButton'
import MyInput from './UI/Input/MyInput'

const PostForm = ({create}) => {

    const [newPost, setNewPost] = useState({title: '', body: ''})

    const addNewPost = (event) => {
        event.preventDefault() 
        const createdPost = {
          ...newPost,
          id: Date.now()
        }
        create(createdPost)
        setNewPost({title: '', body: ''})
      }

    return(
        <form>
            <MyInput 
                value={newPost.title}
                onChange={event => setNewPost({...newPost, title: event.target.value})}
                type='text' 
                placeholder='Введите название поста..'
            />

            <MyInput
                value={newPost.body}
                onChange={event => setNewPost({...newPost, body: event.target.value})}
                type='text' 
                placeholder='Введите текст..'
            />

            <MyButton onClick={addNewPost}>Создать</MyButton>
        </form>  
    )
}

export default PostForm