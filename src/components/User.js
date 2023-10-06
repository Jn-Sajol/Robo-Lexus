import React, { useContext } from 'react'
import { userContext } from '../context/userContext'

const User = () => {
    const users = useContext(userContext);
    console.log(users);
  return (
    <div>{users.name}</div>
  )
}

export default User