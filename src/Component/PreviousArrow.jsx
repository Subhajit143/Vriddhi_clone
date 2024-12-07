import React from 'react'
import { SlArrowLeft } from "react-icons/sl";

const PreviousArrow = (props) => {
  const {onClick}=props;
    return (
    <div onClick={onClick} className='w-14 h-14 rounded-full text-primary-dark flex items-center justify-center absolute top-[35%] left-0 z-10 '>
        <SlArrowLeft className='text-4xl' />
    </div>
  )
}

export default PreviousArrow