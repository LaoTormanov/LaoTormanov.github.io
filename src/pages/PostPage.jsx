import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import PostForPage from '../Components/PostForPage'
import MyLoader from '../Components/UI/Loader/MyLoader'
import { useFetching } from '../hooks/useFetching'

const PostPage = () => {
    const params = useParams()

    const [post, setPost] = useState({})
    const [fetchPost, loading, postError] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPost(params.id)
    }, [])

    const [comments, setComments] = useState([])
    const [fetchComments, loadingComments, commentsError] = useFetching(async (id) => {
        const response = await PostService.getComments(id)
        console.log(response)
        setComments(response.data)
    })

    useEffect(() => {
        fetchComments(params.id)
    }, [])

    return (
        <div>
            {loading
                ? <MyLoader/>
                : <PostForPage post={post} comments={comments}/>
            }
        </div>
    )
}

export default PostPage
