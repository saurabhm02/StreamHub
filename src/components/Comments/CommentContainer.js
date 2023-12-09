import React from 'react'
import Comment from './Comment'

const CommentContainer = () => {
  return (
    <div className="m-2 p-2">
        <h1 className="text-2xl font-bold">Comments: </h1>
        <Comment />
    </div>
  )
}

export default CommentContainer