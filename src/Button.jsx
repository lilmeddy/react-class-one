import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button  className={`bg-${props.color}-400 rounded py-3 px-5 font-semibold text-[20px]`}>{props.mede}</button>
    </div>
  )
}

export default Button