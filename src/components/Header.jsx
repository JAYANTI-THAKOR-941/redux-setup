import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const {count} = useSelector(state=>state)
  return (
    <div>
        <h1>Header</h1>
        <h2>{count}</h2>
    </div>
  )
}

export default Header