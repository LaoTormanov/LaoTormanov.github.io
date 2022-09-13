import React from 'react'
import cl from './MyLoader.module.css'

const MyLoader = () => {
  return (
    <div className={cl.loaderRoot}>
      <div className={cl.loaderContent}>
      </div>
    </div>
  )
}

export default MyLoader
