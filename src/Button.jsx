import React from 'react'

const Button = ({buttonName,onClick,className,...props}) => {
  return (
    <div>
            <button onClick={onClick} className={`bg-purple-300 px-4 py-2  border-2 rounded-lg font-extrabold text-purple-700 ${className}` } {...props}>{buttonName}</button>
    </div>
  )
}

export default Button