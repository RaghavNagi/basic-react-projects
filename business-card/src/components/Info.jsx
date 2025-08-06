import React from 'react'

const Info = ({name,role}) => {

  return (
    <div>
      <h1 className="text-white text-3xl font-bold">{name}</h1>
      <h3 className="text-gray-200 text-xl mt-1">{role}</h3>
    </div>
  )
}

export default Info