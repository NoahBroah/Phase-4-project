import React from 'react'

function Home({ user}) {
  return (
    <div>{!user ? "Please login to see your account" : user.username}</div>
  )
}

export default Home