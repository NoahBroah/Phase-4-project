import React from 'react'

function IndividualComment({comment, user}) {
  return (
    <div>
      <div>{comment}</div>
      <div>- {user.username}</div>
    </div>
  )
}

export default IndividualComment