import React from 'react'
import cl from './MyComment.module.css'

const MyComment = ({comments}) => {

  return (
    <div className={cl.myComments}>
      {comments.map(comm => 
                <div key={comm.id} className={cl.myComment}>
                    <h4 className={cl.commTitle}>{comm.email}</h4>
                    <div>{comm.body}</div>
                </div>)}
    </div>
  )
}

export default MyComment
