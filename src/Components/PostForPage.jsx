import React from 'react'
import MyComment from './UI/Comment/MyComment'

const PostForPage = ({comments, ...props}) => {
  return (
    <div className='standart-block'>
            <h1>Пост #{props.post.id}</h1>
            <div className='post'>
                <div className='post-content'>
                    <h3>{props.post.title}</h3>
                    <div>
                        {props.post.body}
                    </div>
                </div>
            </div>
            <MyComment comments={comments}/>
    </div>
  )
}

export default PostForPage
