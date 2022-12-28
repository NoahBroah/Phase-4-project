import React from 'react'

function Home({ user}) {
  return (
    <div>{!user ? null : user.username}</div>
  )
}

export default Home