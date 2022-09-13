import React, { useEffect, useState } from 'react';
import PostFilter from '../Components/PostFilter';
import PostForm from '../Components/PostForm';
import PostsList from '../Components/PostsList';
import MyButton from '../Components/UI/Button/MyButton';
import MyModal from '../Components/UI/Modal/MyModal';
import { usePosts } from '../hooks/usePosts';
import '../styles/App.css'
import PostService from '../API/PostService';
import MyLoader from '../Components/UI/Loader/MyLoader';
import { useFetching } from '../hooks/useFetching';
import { getPagesArray, getPagesCount } from '../utils/pages'
import MyPagination from '../Components/UI/Pagination/MyPagination';

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [visible, setVisible] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    
    const [fetchPosts, loading, postError] = useFetching(async (limit, page) => {
      const response = await PostService.getAll(limit, page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPagesCount(totalCount, limit))
    })

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setVisible(false)
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

    const updPage = (page) => {
      setPage(page)
      fetchPosts(limit, page)
    }

    useEffect(() => {
      fetchPosts(limit, page)
    }, [])
    
    return (    
    <div className="App">
      
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm create={createPost}/>
      </MyModal>

      <div className='standart-block'>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <MyButton onClick={() => setVisible(true)}>Создать пост</MyButton>
      </div>

      {postError &&
        <h1 style={{display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px'}}>Произошла ошибка: {postError}.</h1>
      }

      {loading
        ? <MyLoader/>
        : <PostsList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
      }
      
      <MyPagination totalPages={totalPages} page={page} updPage={updPage}/>
      
    </div>
  );

}

export default Posts