import React from 'react'
import { Link }from 'react-router-dom'

const Header: React.FC = ()=> {
  return <ul>
    <li>
      <Link to="/">首页</Link>
    </li>
    <li>
      <Link to="/about">关于我们</Link>
    </li>
  </ul>
}

export default Header