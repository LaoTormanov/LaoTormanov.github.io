import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from './UI/Button/MyButton'

const Post = (props) => {
    const navigate = useNavigate()

    return (
      <div className='post'>
        <div className='post-content'>
          <h3>{props.number}. {props.post.title}</h3>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className='post-buttons'>
          <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>     
    )
}

export default Post