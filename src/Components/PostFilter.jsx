import React from 'react'
import MySelect from './UI/Select/MySelect'
import MyInput from './UI/Input/MyInput'

const PostFilter = ({filter, setFilter}) => {

    return(
      <div>
        <MyInput 
          value={filter.query}
          onChange={event => setFilter({...filter, query: event.target.value})}
          placeholder='Поиск..'
        />

        <MySelect
          value={filter.sort}
          onChange={event => setFilter({...filter, sort: event})}
          defaultOption={'Сортировать по..'}
          options={[
            {name: 'Сортировать по заголовку', value: 'title'},
            {name: 'Сортировать по содержанию', value: 'body'}
          ]}
        />
      </div>
    )
}

export default PostFilter