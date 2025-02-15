import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className='px-2 font-title text-{1rem} py-1 border border-red-600 rounded-md'>{props.navbtn}</button>
    </>
  )
}

export default Button